"use client";

import { useState } from "react";
import { Product } from "@/types/products";
import { useLocale, useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/shadcn/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { Button } from "@/components/shadcn/button";
import { ShoppingCart, Heart, XIcon } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const locale = useLocale().toUpperCase();
  const t = useTranslations();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get localized content
  const name = product.names[locale] || "";
  const description = product.descriptions[locale] || "";

  console.log("ProductModal - Selected Product:", product);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl bg-gray-50 border border-gray-100 p-0">
        <DialogHeader className="px-3 flex-1 py-2 flex-row flex border-b border-gray-200 shadow-sm w-full">
          <DialogTitle className="text-2xl flex-1 gap-3 flex items-center font-bold text-gray-900">
            {name}
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              {product.category}
            </Badge>
          </DialogTitle>
          <Button
            className="rounded-full bg-white hover:bg-gray-100"
            onClick={onClose}
          >
            <XIcon stroke="black" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Product Image Carousel */}
          <div className="relative">
            {product.imagesUrls && product.imagesUrls.length > 0 ? (
              <div className="space-y-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.imagesUrls.map((imageUrl, index) => (
                      <CarouselItem key={`image-${index}`}>
                        <div className="aspect-square relative overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={imageUrl}
                            alt={`${name} - Image ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                </Carousel>

                {/* Thumbnail Navigation */}
                {product.imagesUrls.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.imagesUrls.map((imageUrl, index) => (
                      <button
                        key={`thumb-${index}`}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                          selectedImageIndex === index
                            ? "border-primary"
                            : "border-gray-200"
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
              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-md border border-gray-200">
                <ShoppingCart className="h-16 w-16 text-gray-300" />
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space">
            <div className="flex items-baseline justify-between text-gray-900">
              <span className="text-xl font-bold">{`${product?.price}  $`}</span>
            </div>
            <div className="pt-4 gap-3 flex flex-col">
              <Button
                className="w-full !bg-blue-600 hover:!bg-blue-700 !text-white !border-blue-600 font-medium"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5 text-white" />
                {t("products.addToCart")}
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-800 group hover:bg-gray-100 hover:!text-blue-600 hover:!border-blue-600 transition-all duration-200"
                size="lg"
              >
                <Heart className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors duration-200" />
                {t("products.addToWishlist")}
              </Button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-2 text-gray-900">
                {t("products.additionalInfo")}
              </h4>
              <div className="text-sm text-gray-700">{description}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
