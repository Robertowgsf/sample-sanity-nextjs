import { MenuIcon } from "@sanity/icons";
import { SanityDocument } from "next-sanity";
import { defineField, defineType, Image } from "sanity";

import { NavItem, SEO } from "../objects";

export interface SettingsPayload extends SanityDocument {
  seo: SEO;
  navbar: {
    logo: Image;
    links: NavItem[];
  };
  footer: {
    links: NavItem[];
  };
}

export const settings = defineType({
  title: "Settings",
  name: "settings",
  type: "document",
  icon: MenuIcon,
  groups: [
    {
      title: "Navigation",
      name: "navigation",
      default: true,
    },
    { title: "SEO", name: "seo" },
  ],
  fields: [
    defineField({
      title: "Navbar",
      name: "navbar",
      type: "object",
      group: "navigation",
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          title: "Logo",
          name: "logo",
          type: "image",
        }),
        defineField({
          title: "Links",
          name: "links",
          type: "array",
          of: [{ type: "navItem" }],
        }),
      ],
    }),
    defineField({
      title: "Footer",
      name: "footer",
      type: "object",
      group: "navigation",
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          title: "Links",
          name: "links",
          type: "array",
          of: [{ type: "navItem" }],
        }),
      ],
    }),
    defineField({
      title: "SEO",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
