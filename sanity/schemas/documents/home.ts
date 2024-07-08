import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

import { PagePayload } from "./page";

export interface HomePayload extends PagePayload {}

export const home = defineType({
  title: "Home",
  name: "home",
  type: "document",
  groups: [
    {
      title: "Content",
      name: "content",
      default: true,
    },
    { title: "SEO", name: "seo" },
  ],
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: rule => rule.required(),
      group: "content",
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "modules",
      group: "content",
    }),
    defineField({
      title: "SEO",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      seoImage: "seo.image",
    },
    prepare(selection) {
      const { title, seoImage } = selection;

      return {
        title,
        subtitle: "Home",
        media: seoImage,
      };
    },
  },
});
