import { EncodeDataAttributeCallback } from "@sanity/react-loader";

import { Modules } from "@/components/modules";
import { PagePayload } from "@/sanity/schemas/documents";

interface PageProps {
  data?: PagePayload;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export const Page: React.FC<PageProps> = ({ data, encodeDataAttribute }) => {
  return (
    <>
      {!!data?.modules && (
        <Modules
          modules={data.modules}
          encodeDataAttribute={encodeDataAttribute}
        />
      )}
    </>
  );
};
