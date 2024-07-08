import { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { Page } from "@/components/pages/Page";
import { client } from "@/sanity/lib/client";
import { PAGES_QUERY } from "@/sanity/lib/queries";
import { generatePageMetadata } from "@/sanity/lib/utils";
import { loadPage } from "@/sanity/loader/loadQuery";

const PagePreview = dynamic(() =>
  import("@/components/pages/PagePreview").then(mod => mod.PagePreview),
);

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return client.fetch<SanityDocument[]>(PAGES_QUERY);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const { data } = await loadPage(params.slug);
  return generatePageMetadata(data);
}

export default async function PageSlugRoute({ params }: PageProps) {
  const initial = await loadPage(params.slug);

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />;
  }

  if (!initial.data) {
    return notFound();
  }

  return <Page data={initial.data} />;
}
