import { QueryHookOptions, QueryResult, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";

export function useSimpleQuery(
  query: DocumentNode,
  options?: QueryHookOptions
): QueryResult {
  const result = useQuery(query, options);

  const { loading, error, data } = result;

  if (error) {
    throw error;
  } else if (!loading && !data) {
    throw new Error("No data found");
  }

  return result;
}
