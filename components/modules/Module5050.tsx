import React from "react";
import { stegaClean } from "@sanity/client/stega";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";

import { palettes } from "@/components/objects/palettes";
import { CustomPortableText } from "@/components/shared/CustomPortableText";
import { SanityImage } from "@/components/shared/SanityImage";
import { Module5050Payload } from "@/sanity/schemas/modules";

interface Module5050Props {
  index: number;
  module: Module5050Payload;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export const Module5050: React.FC<Module5050Props> = ({
  index,
  module: { image, palette: _palette, body, imageSide: _imageSide },
  encodeDataAttribute,
}) => {
  const palette = stegaClean(_palette);
  const imageSide = stegaClean(_imageSide);

  return (
    <section
      className={`flex w-full flex-col items-center lg:flex-row px-8 py-16 gap-12 lg:py-32 lg:px-28 lg:gap-20 ${palette ? palettes[palette]?.surface : ""}`}
      data-sanity={encodeDataAttribute?.(["modules", index, "palette"])}>
      <div className={`w-full h-full flex justify-center items-center`}>
        <div
          className="rounded-tl rounded-tr-[80px] rounded-bl-[80px] rounded-br"
          style={{ boxShadow: "30px 30px 50px -30px rgba(0,0,0,0.43)" }}>
          <SanityImage
            src={image}
            width={720}
            height={380}
            className={`object-cover rounded-tl rounded-tr-[80px] rounded-bl-[80px] rounded-br`}
            data-sanity={encodeDataAttribute?.(["modules", index, "image"])}
          />
        </div>
      </div>
      <div
        className={`w-full flex items-center ${imageSide === "right" ? "lg:order-first" : ""}`}>
        <div>
          <CustomPortableText body={body} />
        </div>
      </div>
    </section>
  );
};
