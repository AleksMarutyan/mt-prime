import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { Skeleton } from "@/components/shadcn/skeleton";

export function ProductSkeleton() {
  return (
    <Card className="group overflow-hidden cursor-pointer h-full bg-white rounded-lg border border-gray-100">
      {/* Main card content with image and badge */}
      <div className="relative">
        {/* Category badge skeleton */}
        <Skeleton className="absolute top-3 left-3 h-7 w-24 rounded-full bg-gray-200 z-10" />

        {/* Wishlist button skeleton */}
        <Skeleton className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-200 z-10" />

        {/* Image skeleton */}
        <div className="aspect-square overflow-hidden">
          <Skeleton className="h-full w-full bg-gray-200" />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          {/* Price skeleton */}
          <Skeleton className="h-7 w-20 rounded bg-gray-200" />
          {/* Cart button skeleton */}
          <Skeleton className="h-9 w-9 rounded bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  );
}
