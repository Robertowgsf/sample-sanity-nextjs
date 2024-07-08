import React from "react";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";

import { Module } from "@/sanity/schemas/objects";

import { Hero } from "./Hero";
import { Module5050 } from "./Module5050";

const components = {
  hero: Hero,
  module5050: Module5050,
};

interface ModulesProps {
  modules: Module[];
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export const Modules = ({
  modules,
  encodeDataAttribute,
}: Readonly<ModulesProps>) => {
  return (
    <>
      {modules.map((module, index) => {
        const component = components[module._type as keyof typeof components];
        if (component) {
          return React.createElement(component as React.FC<any>, {
            key: module._key,
            index: index,
            module: module,
            encodeDataAttribute: encodeDataAttribute,
          });
        }

        return (
          <section key={module._key as string} className="my-10">
            <div className="wrapper">
              <div className="rounded border border-red-200 bg-red-50 p-12">
                <p className="text-center text-red-500">
                  The component{" "}
                  <code className="inline-block rounded bg-red-100 px-2 py-1 text-sm">
                    {module._type}
                  </code>{" "}
                  has not been created yet.
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export { Hero };
