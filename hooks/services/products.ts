// hooks/useProducts.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "@/types/products";
import { PaginatedResponse, PaginatedRequest } from "@/types/pagination";
import { buildQueryString } from "@/utils/query-params";

export function useProductsInfiniteQuery(baseParams?: PaginatedRequest) {
  return useInfiniteQuery({
    queryKey: ["products", baseParams],
    queryFn: async ({ pageParam = 1 }): Promise<PaginatedResponse<Product>> => {
      // Use page and pageSize from baseParams or defaults
      const pageSize = baseParams?.pageSize ?? 10;
      const page = pageParam;

      // Calculate _start and _end for backend
      const _start = (page - 1) * pageSize;
      const _end = _start + pageSize;

      const params = {
        ...baseParams,
        _start,
        _end,
      };

      const response = await fetch(`/api/products${buildQueryString(params)}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      return data;
    },
    getNextPageParam: (lastPage) => {
      const { page, pageSize, total } = lastPage;
      return page * pageSize < total ? page + 1 : undefined;
    },
    initialPageParam: baseParams?.page ?? 1,
  });
}
