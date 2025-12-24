"use client";

import { useState } from "react";
import { Product } from "@/types/products";
import { useLocale, useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { XIcon } from "lucide-react";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const locale = useLocale().toUpperCase();
  const t = useTranslations();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const name = product.names[locale] || product.names.EN || "Product";
  const description =
    product.descriptions[locale] || product.descriptions.EN || "";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-[#1a1a1a] border-2 border-[#2a2a2a] p-0 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-[#2a2a2a] flex flex-row items-center justify-between sticky top-0 bg-[#1a1a1a] z-10">
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            {name}
            {product.category && (
              <span className="bg-[#fe9927] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            )}
          </DialogTitle>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-[#2a2a2a] transition-colors"
          >
            <XIcon className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image Carousel */}
          <div className="relative">
            {product.imagesUrls && product.imagesUrls.length > 0 ? (
              <div className="space-y-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.imagesUrls.map((imageUrl, index) => (
                      <CarouselItem key={`image-${index}`}>
                        <div className="aspect-square relative overflow-hidden rounded-lg bg-white">
                          <img
                            src={imageUrl}
                            alt={`${name} - Image ${index + 1}`}
                            className="object-contain w-full h-full p-4"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {product.imagesUrls.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 bg-[#fe9927] hover:bg-[#ff8800] text-black border-none" />
                      <CarouselNext className="right-2 bg-[#fe9927] hover:bg-[#ff8800] text-black border-none" />
                    </>
                  )}
                </Carousel>

                {/* Thumbnail Navigation */}
                {product.imagesUrls.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.imagesUrls.map((imageUrl, index) => (
                      <button
                        key={`thumb-${index}`}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 flex-shrink-0 transition-all ${
                          selectedImageIndex === index
                            ? "border-[#fe9927]"
                            : "border-[#2a2a2a] hover:border-[#fe9927]/50"
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img
                          src={imageUrl}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-square bg-[#0f0f0f] flex items-center justify-center rounded-lg border border-[#2a2a2a]">
                <svg
                  className="h-16 w-16 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Price */}
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold text-[#fe9927]">
                €{product.price.toFixed(2)}
              </span>
              {product.sku && (
                <span className="text-sm text-gray-500">
                  SKU: {product.sku}
                </span>
              )}
            </div>

            {/* Description */}
            {description && (
              <div className="pt-4 border-t border-[#2a2a2a]">
                <h4 className="font-semibold mb-2 text-white text-lg">
                  Product Description
                </h4>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 gap-3 flex flex-col">
              <button className="w-full bg-[#fe9927] hover:bg-[#ff8800] text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-[#fe9927]/20 hover:shadow-[#fe9927]/40 flex items-center justify-center gap-2">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="w-full border-2 border-[#fe9927] text-[#fe9927] hover:bg-[#fe9927] hover:text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
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
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
