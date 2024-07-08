import React from "react";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";

import { CustomPortableText } from "@/components/shared/CustomPortableText";
import { SanityImage } from "@/components/shared/SanityImage";
import { HeroPayload } from "@/sanity/schemas/modules";

interface HeroProps {
  index: number;
  module: HeroPayload;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export const Hero: React.FC<HeroProps> = ({
  index,
  module: { body, image },
  encodeDataAttribute,
}) => {
  return (
    <section className={`relative`}>
      <SanityImage
        src={image}
        className="object-cover w-full max-h-[80vh]"
        priority={image?.priority}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className="absolute inset-0 flex items-center px-8 py-16 gap-12 lg:py-32 lg:px-28"
        data-sanity={encodeDataAttribute?.(["modules", index, "image"])}>
        <div className="block w-full text-white">
          <CustomPortableText body={body} />
        </div>
      </div>
    </section>
  );
};
