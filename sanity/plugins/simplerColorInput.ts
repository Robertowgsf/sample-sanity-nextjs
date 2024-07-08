import { RecursiveKeyValuePair } from "tailwindcss/types/config";

import { PaletteValueType } from "@/components/objects/palettes";
import { colors } from "@/tailwind.config";

export const BACKGROUND_COLORS: {
  label: string;
  value: any;
  palette: PaletteValueType;
}[] = [
  {
    label: "White",
    value: colors["primary-surface"],
    palette: "primary",
  },
  {
    label: "Red",
    value: colors["secondary-surface"],
    palette: "secondary",
  },
];

export const INITIAL_BACKGROUND_COLOR = BACKGROUND_COLORS[0];
