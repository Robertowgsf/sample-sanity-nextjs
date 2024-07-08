/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioPath } from "@/sanity/lib/api";
import { locate } from "@/sanity/plugins/locate";
import { singleton } from "@/sanity/plugins/singleton";
import { structure } from "@/sanity/plugins/structure";
import { schema } from "@/sanity/schemas";
import { home, settings } from "@/sanity/schemas/documents";

import { BACKGROUND_COLORS } from "./sanity/plugins/simplerColorInput";

export default defineConfig({
  basePath: studioPath,
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
          disable: "/api/disable-draft",
        },
      },
    }),
    singleton([home.name, settings.name]),
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // https://www.sanity.io/plugins/sanity-plugin-simpler-color-input
    simplerColorInput({
      defaultColorFormat: "rgba",
      defaultColorList: BACKGROUND_COLORS,
      enableSearch: true,
    }),
  ],
});
