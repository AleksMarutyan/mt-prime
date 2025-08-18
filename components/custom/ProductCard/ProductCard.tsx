import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { Product } from "@/types/products";
import { ShoppingCart, Heart } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const locale = useLocale();
  const name = product.names[locale];
  const firstImage = product.imagesUrls?.[0];
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group overflow-hidden cursor-pointer h-full bg-white rounded-lg border border-gray-100 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      {/* Main card content with image and badge */}
      <div className="relative">
        {/* Category badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-white text-black font-medium z-10 py-1.5 px-3 rounded-full transition-colors group-hover:bg-primary group-hover:text-white"
        >
          {product.category}
        </Badge>

        {/* Wishlist button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm z-10 transition-colors hover:bg-primary hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Heart
            className={`h-5 w-5 ${
              isHovering ? "text-rose-500" : "text-gray-700"
            } transition-colors`}
          />
        </Button>

        <div className="aspect-square overflow-hidden">
          {firstImage ? (
            <img
              alt={name}
              src={firstImage}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-300 bg-gray-100">
              <ShoppingCart className="h-16 w-16" />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 transition-colors duration-300 ">
            {product.price} $
          </span>

          <Button
            variant="outline"
            size="sm"
            className="bg-white border-gray-300 text-gray-800 transition-colors duration-300 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShoppingCart className="h-4 w-4 text-black" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
