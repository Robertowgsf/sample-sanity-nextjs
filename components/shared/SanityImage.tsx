"use client";

import { FC, ReactEventHandler } from "react";
import { useNextSanityImage } from "next-sanity-image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import * as sanity from "sanity";

import { client } from "@/sanity/lib/client";

interface SanityImageProps {
  src: sanity.Image;
  className?: string;
  alt?: string;
  sizes?: string;
  height?: number;
  width?: number;
  fill?: boolean;
  priority?: boolean;
  placeholder?: PlaceholderValue;
  onLoad?: ReactEventHandler;
  "data-sanity"?: string;
}

export const SanityImage: FC<SanityImageProps> = ({
  src,
  className,
  alt,
  sizes,
  height,
  width,
  fill,
  priority = false,
  onLoad,
  ...props
}: SanityImageProps) => {
  const imageProps = useNextSanityImage(client, src, {
    imageBuilder: (imageUrlBuilder, options) => {
      return imageUrlBuilder
        .width(width || options.originalImageDimensions.width)
        .height(height || options.originalImageDimensions.height)
        .quality(100);
    },
  });

  if (!imageProps) return null;

  const customLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Image
      {...imageProps}
      alt={alt ?? ""}
      className={className}
      sizes={sizes}
      loader={customLoader}
      unoptimized={!fill}
      priority={priority}
      onLoad={onLoad}
      data-sanity={props["data-sanity"]}
    />
  );
};
