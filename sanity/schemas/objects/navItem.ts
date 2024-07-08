import { LinkIcon as icon } from "@sanity/icons";
import { defineField } from "sanity";

export interface NavItem {
  _type: "navItem";
  _key: string;
  title: string;
  href: string;
}

export const navItem = defineField({
  title: "Navigation Item",
  name: "navItem",
  type: "object",
  icon,
  fields: [
    defineField({
      title: "Navigation Title",
      name: "title",
      type: "string",
      description: "Text to display on the navigation bar.",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Internal Link",
      name: "link",
      type: "reference",
      description: "Select pages for navigation",
      to: { type: "page" },
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title,
      };
    },
  },
});
