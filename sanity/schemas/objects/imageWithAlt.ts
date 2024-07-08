import { defineField, Image } from "sanity";

export interface ImageWithAlt extends Image {
  alt: string;
  priority: boolean;
}

export const imageWithAlt = defineField({
  title: "Image w/ Alt Text",
  name: "imageWithAlt",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: "Alt Text",
      name: "alt",
      type: "string",
      description: "Important for SEO & accessibility",
    }),
    defineField({
      title: "Priority",
      name: "priority",
      type: "boolean",
      description:
        "This should be true if the image is presented immediately after the page load",
    }),
  ],
});
