"use client";

import { QueryResponseInitial } from "@sanity/react-loader";

import { PAGE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import { PagePayload } from "@/sanity/schemas/documents";

import { Page } from "./Page";

interface PagePreviewProps {
  params: { slug: string };
  initial: QueryResponseInitial<PagePayload>;
}

export const PagePreview: React.FC<PagePreviewProps> = ({
  params,
  initial,
}) => {
  const { data, encodeDataAttribute } = useQuery<PagePayload>(
    PAGE_BY_SLUG_QUERY,
    params,
    {
      initial,
    },
  );

  return <Page data={data} encodeDataAttribute={encodeDataAttribute} />;
};
