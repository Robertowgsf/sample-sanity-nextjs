import { type SchemaTypeDefinition } from "sanity";

import { home, page, settings } from "./documents";
import { hero, module5050 } from "./modules";
import {
  customPortableText,
  imageWithAlt,
  modules,
  navItem,
  seo,
} from "./objects";

const documents = [home, page, settings];

const documentModules = [hero, module5050];

const objects = [seo, navItem, modules, imageWithAlt, customPortableText];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...documentModules, ...objects],
};
