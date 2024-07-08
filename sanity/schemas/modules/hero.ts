import { defineField, defineType, PortableTextBlock, SanityDocument } from "sanity";

import { ImageWithAlt } from "../objects";

export interface HeroPayload extends SanityDocument {
  body: PortableTextBlock;
  image: ImageWithAlt;
}

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "customPortableText",
    }),
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare(selection) {
      const { image } = selection;

      return {
        title: "Hero",
        media: image,
      };
    },
  },
});
