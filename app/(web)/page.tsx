import { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import { Page } from "@/components/pages/Page";
import { generatePageMetadata } from "@/sanity/lib/utils";
import { loadHomePage } from "@/sanity/loader/loadQuery";

const HomePreview = dynamic(() =>
  import("@/components/pages/HomePreview").then(mod => mod.HomePreview),
);

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { data } = await loadHomePage();
  return generatePageMetadata(data);
}

export default async function IndexRoute() {
  const initial = await loadHomePage();

  if (draftMode().isEnabled) {
    return <HomePreview initial={initial} />;
  }

  return <Page data={initial.data} />;
}
