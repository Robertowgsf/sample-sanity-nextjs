import { SanityDocument } from "next-sanity";
import { defineField, Image } from "sanity";

export interface SEO extends SanityDocument {
  metaTitle: string;
  metaDesc: string;
  ogImage: Image;
}

export const seo = defineField({
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  fields: [
    defineField({
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description:
        "Title used for search engines and browsers, if empty, displays the document title",
      validation: Rule =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines",
        ),
    }),
    defineField({
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines",
      validation: Rule =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines",
        ),
    }),
    defineField({
      title: "Open Graph Image",
      name: "ogImage",
      type: "image",
      description: "Recommended size: 1200x630 (PNG or JPG)",
    }),
  ],
});
