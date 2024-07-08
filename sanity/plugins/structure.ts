import { CogIcon, HomeIcon } from "@sanity/icons";
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = S =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.document()
            .title(`Home`)
            .schemaType("home")
            .documentId("home"),
        ),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(
          S.documentList()
            .title(`Pages`)
            .schemaType("page")
            .filter('_type == "page"'),
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .title("Settings")
            .schemaType("settings")
            .documentId("settings"),
        ),
    ]);
