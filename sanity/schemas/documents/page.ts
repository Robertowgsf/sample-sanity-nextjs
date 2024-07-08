import { defineField, defineType, SanityDocument, Slug } from "sanity";

import { Module, SEO } from "../objects";

export interface PagePayload extends SanityDocument {
  title: string;
  slug: Slug;
  modules?: Module[];
  seo: SEO;
}

export const page = defineType({
  title: "Pages",
  name: "page",
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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: () => true,
      },
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
      slug: "slug",
      seoImage: "seo.image",
    },
    prepare(selection) {
      const { title, slug, seoImage } = selection;

      return {
        title,
        subtitle: slug?.current,
        media: seoImage,
      };
    },
  },
});
