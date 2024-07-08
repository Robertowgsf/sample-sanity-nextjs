import {
  defineField,
  defineType,
  PortableTextBlock,
  SanityDocument,
} from "sanity";

import { INITIAL_BACKGROUND_COLOR } from "@/sanity/plugins/simplerColorInput";

import { ImageWithAlt } from "../objects";
import { PaletteValueType } from "@/components/objects/palettes";

export interface Module5050Payload extends SanityDocument {
  image: ImageWithAlt;
  palette: PaletteValueType;
  body: PortableTextBlock;
  imageSide: "left" | "right";
}

export const module5050 = defineType({
  name: "module5050",
  title: "Module 5050",
  type: "object",
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    }),
    defineField({
      title: "Background color",
      name: "palette",
      type: "simplerColor",
      initialValue: INITIAL_BACKGROUND_COLOR,
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "customPortableText",
    }),
    defineField({
      title: "Image side",
      name: "imageSide",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
      validation: rule => rule.required(),
    }),
  ],
  initialValue: {
    imageSide: "right",
  },
  preview: {
    select: {
      image: "image",
    },
    prepare(selection) {
      const { image } = selection;

      return {
        title: "Module 5050",
        media: image,
      };
    },
  },
});
