import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { PagePayload } from "../schemas/documents";
import { client } from "./client";

const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  const builder = imageUrlBuilder(client);

  return builder.image(source).auto("format").fit("max");
};

const urlForOpenGraphImage = (image: Image | undefined) => {
  return urlForImage(image)?.width(1200).height(630).fit("crop").url();
};

export const generatePageMetadata = (data: PagePayload) => {
  if (!data) {
    return;
  }

  const ogImage = urlForOpenGraphImage(data.seo?.ogImage);

  return {
    title: data.seo?.metaTitle ?? data.title,
    description: data.seo?.metaDesc,
    openGraph: {
      title: data.seo?.metaTitle,
      description: data.seo?.metaDesc,
      images: [
        {
          url: ogImage ?? "",
          width: 800,
          height: 600,
        },
      ],
    },
  };
};
