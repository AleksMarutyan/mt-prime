// hooks/useProducts.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "@/types/products";
import { PaginationParams } from "@/types/pagination";
import { buildQueryString } from "@/utils/query-params";

export function useProductsInfiniteQuery(
  baseParams?: Omit<PaginationParams, "_start" | "_end">
) {
  return useInfiniteQuery({
    queryKey: ["products", baseParams],
    queryFn: async ({ pageParam = 0 }): Promise<Product[]> => {
      const params: PaginationParams = {
        ...baseParams,
        _start: pageParam,
        _end: pageParam + 10,
      };

      const response = await fetch(`/api/products${buildQueryString(params)}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
    getNextPageParam: (lastPage, allPages) => {
      const currentCount = allPages.flat().length;
      return lastPage.length === 10 ? currentCount : undefined;
    },
    initialPageParam: 0,
  });
}
