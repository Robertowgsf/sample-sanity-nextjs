import {
  useEncodeDataAttribute,
  UseQueryOptions,
  UseQueryOptionsUndefinedInitial,
} from "@sanity/react-loader";
import { QueryParams } from "next-sanity";

import { studioPath } from "../lib/api";
import { queryStore } from "./createQueryStore";

/**
 * Exports to be used in client-only or components that render both server and client
 */
export const useQuery = <
  QueryResponseResult = unknown,
  QueryResponseError = unknown,
>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptions<QueryResponseResult>,
) => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(
    query,
    params,
    options as UseQueryOptionsUndefinedInitial,
  );

  const encodeDataAttribute = useEncodeDataAttribute(
    snapshot.data,
    snapshot.sourceMap,
    studioPath,
  );

  if (snapshot.error) {
    throw snapshot.error;
  }

  return {
    ...snapshot,
    encodeDataAttribute,
  };
};

export const { useLiveMode } = queryStore;
