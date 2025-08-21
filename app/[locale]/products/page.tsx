"use client";

import { Button } from "@/components/shadcn/button";
import { useProductsInfiniteQuery } from "@/hooks/services/products";
import {
  AlertCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ProductCard, ProductSkeleton } from "@/components/custom/ProductCard";
import { useTranslations } from "next-intl";
import { Product } from "@/types/products";
import { useState } from "react";
import { ProductModal } from "@/components/custom/ProductModal";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/shadcn/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/select";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, refetch, isLoading, isError } = useProductsInfiniteQuery(
    { pageSize, page: currentPage }
  );

  const products = data?.pages ? data.pages.flatMap((page) => page.data) : [];
  const total = data?.pages?.[0]?.total ?? 0;
  const t = useTranslations();

  const totalPages = Math.ceil(total / pageSize);

  // Pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    refetch();
  };

  // Page size handler
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
    refetch();
  };

  if (!isLoading && isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8 max-w-md w-full flex flex-col items-center">
          <AlertCircle className="h-10 w-10 text-red-400 mb-3" />
          <span className="text-lg font-semibold text-gray-700 mb-2">
            {error instanceof Error ? error.message : "Failed to load products"}
          </span>
          <span className="text-sm text-gray-500 mb-4 text-center">
            Please check your connection or try again.
          </span>
          <Button
            variant="outline"
            onClick={() => refetch()}
            className="text-blue-600 items-center gap-2 hover:bg-blue-50 hover:text-blue-800 transition-colors"
          >
            <RotateCcw className="h-5 w-5" />
            Refetch
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {t("products.title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t("products.subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
      </div>

      {/* Pagination Controls */}
      <div className="relative flex flex-col md:flex-row items-center gap-4 mt-24 mb-8 px-2">
        {/* Centered Pagination using shadcn components */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Pagination>
            <PaginationContent className="flex items-center gap-2 bg-white rounded-lg shadow border border-gray-100 px-6 py-2">
              {/* Prev Button */}
              <PaginationItem>
                <Button
                  variant="outline"
                  className="rounded-full w-[40px] h-[40px] flex-0 px-4 py-1 mr-4 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft />
                </Button>
              </PaginationItem>
              {/* Page Numbers */}
              {totalPages > 1 ? (
                Array.from({ length: totalPages }).map((_, idx) => (
                  <PaginationItem key={idx + 1}>
                    <PaginationLink
                      className={`rounded-full w-[40px] h-[40px] flex-0 px-4 py-1 font-medium transition-colors ${
                        currentPage === idx + 1
                          ? "bg-blue-100 text-blue-600 border border-blue-600 shadow-sm"
                          : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                      }`}
                      onClick={() => handlePageChange(idx + 1)}
                      isActive={currentPage === idx + 1}
                    >
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))
              ) : (
                <PaginationItem>
                  <PaginationLink
                    className="rounded-full min-w-[40px] px-4 py-1 bg-blue-100 text-blue-600 font-bold border border-blue-600 shadow-sm"
                    isActive={true}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              {/* Next Button */}
              <PaginationItem>
                <Button
                  variant="outline"
                  className="rounded-full w-[40px] h-[40px] flex-0 px-4 py-1 ml-4 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 1}
                >
                  <ChevronRight />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {/* Page Size Selector on Right */}
        <div className="md:ml-auto flex items-center gap-2 bg-white rounded-lg shadow border border-gray-100 px-4 py-2">
          <span className="text-sm text-gray-700 font-medium">Page size:</span>
          <Select
            value={pageSize.toString()}
            onValueChange={(val) => handlePageSizeChange(Number(val))}
          >
            <SelectTrigger className="w-[80px] bg-gray-50 border border-gray-200 rounded px-2 py-1 text-gray-700 font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-100 rounded shadow">
              {[10, 20, 30].map((size) => (
                <SelectItem
                  key={size}
                  value={size.toString()}
                  className="text-gray-700 font-medium focus:bg-blue-50 focus:text-blue-600 data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700"
                >
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
