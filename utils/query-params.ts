import { PaginationParams } from "@/types/pagination";

export function buildQueryString(params?: PaginationParams): string {
  if (!params) return "";

  const searchParams = new URLSearchParams();
  if (params._start !== undefined)
    searchParams.set("_start", params._start.toString());
  if (params._end !== undefined)
    searchParams.set("_end", params._end.toString());
  if (params._sort) searchParams.set("_sort", params._sort);
  if (params._order) searchParams.set("_order", params._order);

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}
