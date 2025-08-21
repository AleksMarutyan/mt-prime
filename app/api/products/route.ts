import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Product, CreateProductInput, ProductCategory } from "@/types/products";
import { ApiResponse } from "@/types/api/types";
import { PaginatedResponse } from "@/types/pagination";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest
): Promise<NextResponse<PaginatedResponse<Product> | ApiResponse<null>>> {
  try {
    const { searchParams } = new URL(request.url);

    const _start = parseInt(searchParams.get("_start") || "0");
    const _end = parseInt(searchParams.get("_end") || "10");
    const _sort = searchParams.get("_sort") || "createdAt";
    const _order = searchParams.get("_order") || "ASC";
    const pageSize = _end - _start;
    const page = Math.floor(_start / pageSize) + 1;

    const products = (
      await prisma.product.findMany({
        skip: _start,
        take: pageSize,
        orderBy: {
          [_sort]: _order.toLowerCase() as "asc" | "desc",
        },
      })
    ).map((product) => ({
      ...product,
      category: product.category || ProductCategory.NO_CATEGORY,
      id: product.id,
      names: (product.names as { EN: string; IT: string; FR: string }) || {
        EN: "",
        IT: "",
        FR: "",
      },
      descriptions: (product.descriptions as {
        EN: string;
        IT: string;
        FR: string;
      }) || { EN: "", IT: "", FR: "" },
      imagesUrls: (product.imagesUrls as string[]) || [],
    }));

    const total = await prisma.product.count();

    return NextResponse.json({
      items: products,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<Product | ApiResponse<null>>> {
  try {
    const body: CreateProductInput = await request.json();
    const { names, descriptions, price, category, imagesUrls } = body;

    console.log("Creating product with data:", body);

    const product = await prisma.product.create({
      data: {
        names,
        descriptions,
        price,
        category,
        imagesUrls,
      },
    });

    const transformedProduct: Product = {
      ...product,
      id: product.id,
      names: (product.names as {
        EN: string;
        IT: string;
        FR: string;
      }) || {
        EN: "",
        IT: "",
        FR: "",
      },
      descriptions: (product.descriptions as {
        EN: string;
        IT: string;
        FR: string;
      }) || {
        EN: "",
        IT: "",
        FR: "",
      },
      imagesUrls: (product.imagesUrls as string[]) || [],
      category: product.category || ProductCategory.NO_CATEGORY,
    };

    return NextResponse.json(transformedProduct, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
