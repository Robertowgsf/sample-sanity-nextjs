import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, studioPath } from "./api";

export const client = createClient({
  apiVersion,
  projectId,
  dataset,
  useCdn: false,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: studioPath,
  },
});
