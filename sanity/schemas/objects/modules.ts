import { defineField } from "sanity";

import { HeroPayload, Module5050Payload } from "../modules";

export type Module = HeroPayload | Module5050Payload;

export const modules = defineField({
  title: "Modules",
  name: "modules",
  type: "array",
  of: [{ type: "hero" }, { type: "module5050" }],
});
