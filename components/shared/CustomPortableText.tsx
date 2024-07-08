import React, { PropsWithChildren } from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

interface CustomPortableTextProps {
  body: PortableTextBlock;
}

export const CustomPortableText: React.FC<CustomPortableTextProps> = ({
  body,
}) => {
  const text = "whitespace-pre-wrap mb-4";

  const CustomPortableTextComponents = {
    list: {
      bullet: ({ children }: PropsWithChildren) => (
        <ul className="pl-5 list-disc">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }: PropsWithChildren) => <li>{children}</li>,
    },
    block: {
      h1: ({ children }: PropsWithChildren) => (
        <h1 className={`${text}`}>{children}</h1>
      ),
      h2: ({ children }: PropsWithChildren) => (
        <h2 className={`${text}`}>{children}</h2>
      ),
      h3: ({ children }: PropsWithChildren) => (
        <h3 className={`${text}`}>{children}</h3>
      ),
      normal: ({ children }: PropsWithChildren) => (
        <p className={`${text} text-body-m`}>{children}</p>
      ),
    },
    marks: {
      centered: ({ children }: PropsWithChildren) => (
        <span className="block w-full text-center">{children}</span>
      ),
    },
  };

  return !!body ? (
    <PortableText value={body} components={CustomPortableTextComponents} />
  ) : (
    <></>
  );
};
