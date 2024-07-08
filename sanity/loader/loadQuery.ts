import "server-only";

import { client } from "../lib/client";
import {
  HOME_PAGE_QUERY,
  PAGE_BY_SLUG_QUERY,
  SETTINGS_QUERY,
} from "../lib/queries";
import { readToken } from "../lib/token";
import { PagePayload, SettingsPayload } from "../schemas/documents";
import { queryStore } from "./createQueryStore";

// Configuring a separate client for server-side usage
export const serverClient = client.withConfig({
  token: readToken,
  stega: {
    enabled: false,
  },
});

// Setting the server client in the query store for consistent server-client data handling
queryStore.setServerClient(serverClient);

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */
export function loadHomePage() {
  return queryStore.loadQuery<PagePayload>(
    HOME_PAGE_QUERY,
    {},
    { next: { tags: ["home"] } },
  );
}

export function loadPage(slug: string) {
  return queryStore.loadQuery<PagePayload>(
    PAGE_BY_SLUG_QUERY,
    { slug },
    { next: { tags: [slug] } },
  );
}

export function loadSettings() {
  return queryStore.loadQuery<SettingsPayload>(
    SETTINGS_QUERY,
    {},
    { next: { tags: ["settings"] } },
  );
}
