"use client";

import { FC, useEffect } from "react";
import { VisualEditing } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { useLiveMode } from "@/sanity/loader/useQuery";

// Always enable stega in Live Mode
const stegaClient = client.withConfig({ stega: { enabled: true } });

export const LiveVisualEditing: FC = () => {
  useLiveMode({ client: stegaClient });

  useEffect(() => {
    // If not an iframe or a Vercel Preview deployment, turn off Draft Mode
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent) {
      location.href = "/api/disable-draft";
    }
  }, []);

  return <VisualEditing />;
};
