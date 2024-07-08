export type PaletteValueType = "primary" | "secondary";

export const palettes: Record<
  PaletteValueType,
  {
    surface: string;
    base: string;
  }
> = {
  primary: {
    surface: "bg-primary-surface",
    base: "text-primary-surface",
  },
  secondary: {
    surface: "bg-secondary-surface",
    base: "text-secondary-surface",
  },
};
