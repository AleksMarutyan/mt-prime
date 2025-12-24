import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { Product } from "@/types/products";
import { ShoppingCart, Heart } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

export function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const locale = useLocale().toUpperCase();
  const name = product.names[locale] || product.names.EN || "Product";
  const description =
    product.descriptions[locale] || product.descriptions.EN || "";
  const firstImage = product.imagesUrls?.[0] || "/placeholder-product.png";

  return (
    <div
      onClick={onClick}
      className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group flex flex-col h-full cursor-pointer"
    >
      {/* Image Container - Fixed Height */}
      <div className="relative overflow-hidden bg-white h-64 flex-shrink-0">
        <img
          src={firstImage}
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
        {product.category && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#fe9927] text-black text-xs font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Content Container - Flexible Height */}
      <div className="p-6 flex flex-1 justify-between flex-col flex-grow">
        {/* Product Info - Takes available space */}
        <div className="flex-grow self-start">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#fe9927] transition-colors line-clamp-2 min-h-[3.5rem]">
            {name}
          </h3>
          {description && (
            <p className="text-gray-400 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
              {description}
            </p>
          )}
        </div>

        {/* Price and SKU - Fixed at bottom */}
        <div className="mt-auto">
          <p className="text-2xl font-bold text-[#fe9927] mb-2">
            €{product.price.toFixed(2)}
          </p>

          {product.sku && (
            <p className="text-xs text-gray-500 mb-4">SKU: {product.sku}</p>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex-1 bg-[#fe9927] hover:bg-[#ff8800] text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#fe9927]/20 hover:shadow-[#fe9927]/40"
            >
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="border-2 border-[#fe9927] text-[#fe9927] hover:bg-[#fe9927] hover:text-black font-semibold p-3 rounded-lg transition-all duration-300 flex-shrink-0"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
