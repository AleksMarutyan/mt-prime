"use client";

import { useTranslations, useLocale } from "next-intl";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ProductCard } from "@/components/custom/ProductCard";
import { ProductModal } from "@/components/custom/ProductModal";
import { Product } from "@/types/products";

async function fetchProducts({ pageParam = 0 }) {
  const res = await fetch(
    `/api/products?_start=${pageParam}&_end=${pageParam + 6}`
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default function ShopPage() {
  const t = useTranslations();
  const locale = useLocale().toUpperCase() as "EN" | "FR" | "IT";
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      getNextPageParam: (lastPage, allPages) => {
        const loadedProducts = allPages.reduce(
          (acc, page) => acc + page.data.length,
          0
        );
        return loadedProducts < lastPage.total ? loadedProducts : undefined;
      },
      initialPageParam: 0,
    });

  const products = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a] py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe9927] rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("navigation.shop")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our curated collection of premium products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fe9927]"></div>
            <p className="mt-4 text-gray-400">{t("common.loading")}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No products available yet.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasNextPage && (
              <div className="text-center mt-12">
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="bg-[#1a1a1a] border-2 border-[#fe9927] text-[#fe9927] hover:bg-[#fe9927] hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isFetchingNextPage ? t("common.loading") : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
