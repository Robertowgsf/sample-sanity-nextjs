import { map, Observable } from "rxjs";
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from "sanity/presentation";

export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === "page") {
    /*
      Listen to all changes in the selected document
      and all documents that reference it
    */
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{ _type, slug, title, name }`,
      params,
      { perspective: "previewDrafts" },
    ) as Observable<
      | {
          _type: string;
          slug?: { current: string };
          title?: string | null;
          name?: string | null;
        }[]
      | null
    >;

    // pipe the real-time results to RXJS's map function
    return doc$.pipe(
      map(docs => {
        if (!docs) {
          return {
            message: "Unable to map document type to locations",
            tone: "critical",
          } satisfies DocumentLocationsState;
        }

        // Generate all the locations for page documents
        const pageLocations = docs
          .filter(({ _type, slug }) => _type === "page" && slug?.current)
          .map(({ title, slug }) => ({
            title: title || "Title missing",
            href: `/${slug?.current}`,
          }));

        return {
          locations: [...pageLocations].filter(Boolean),
        } satisfies DocumentLocationsState;
      }),
    );
  }

  return null;
};
