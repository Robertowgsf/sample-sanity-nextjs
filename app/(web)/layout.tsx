import "@/styles/globals.scss";

import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import { Footer } from "@/components/global/Footer";
import { Navbar } from "@/components/global/Navbar/Navbar";

const LiveVisualEditing = dynamic(() =>
  import("@/components/shared/LiveVisualEditing").then(
    mod => mod.LiveVisualEditing,
  ),
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
