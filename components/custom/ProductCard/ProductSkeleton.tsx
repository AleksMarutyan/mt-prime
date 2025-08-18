import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/card";
import { Skeleton } from "@/components/shadcn/skeleton";

export function ProductSkeleton() {
  return (
    <Card>
      <CardHeader className="p-0">
        <Skeleton className="aspect-square rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-3" />
        <Skeleton className="h-8 w-20" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 flex-1" />
      </CardFooter>
    </Card>
  );
}
