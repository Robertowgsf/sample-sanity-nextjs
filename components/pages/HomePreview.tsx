"use client";

import { QueryResponseInitial } from "@sanity/react-loader";

import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import { PagePayload } from "@/sanity/schemas/documents";

import { Page } from "./Page";

interface HomePreviewProps {
  initial: QueryResponseInitial<PagePayload>;
}

export const HomePreview: React.FC<HomePreviewProps> = ({ initial }) => {
  const { data, encodeDataAttribute } = useQuery<PagePayload>(
    HOME_PAGE_QUERY,
    {},
    {
      initial,
    },
  );

  return <Page data={data} encodeDataAttribute={encodeDataAttribute} />;
};
