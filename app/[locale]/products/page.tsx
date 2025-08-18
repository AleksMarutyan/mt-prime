"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "@/components/shadcn/button";
import { Alert, AlertDescription } from "@/components/shadcn/alert";
import { useProductsInfiniteQuery } from "@/hooks/services/products";
import { AlertCircle } from "lucide-react";
import { ProductCard, ProductSkeleton } from "@/components/custom/ProductCard";
import { useTranslations } from "next-intl";
import { Product } from "@/types/products";
import { useState } from "react";
import { ProductModal } from "@/components/custom/ProductModal";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useProductsInfiniteQuery();

  const products = data?.pages.flat() || [];
  const t = useTranslations();

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error instanceof Error ? error.message : "Failed to load products"}
          </AlertDescription>
        </Alert>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
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
      {hasNextPage && (
        <div className="text-center">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            size="lg"
            variant="outline"
            className="min-w-[200px]"
          >
            {isFetchingNextPage ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                {t("products.loading")}
              </>
            ) : (
              t("products.loadMore")
            )}
          </Button>
        </div>
      )}
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
