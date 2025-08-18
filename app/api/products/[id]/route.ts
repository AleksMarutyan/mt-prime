import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Product, ProductCategory } from "@/types/products";
import { ApiResponse } from "@/types/api/types";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Product | ApiResponse<null>>> {
  try {
    const { id } = await params;
    console.log("Fetching product with ID:", id);

    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json<ApiResponse<null>>(
        { error: "Product not found" },
        { status: 404 }
      );
    }

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

    return NextResponse.json(transformedProduct);
  } catch (error) {
    console.error("GET Product Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Product | ApiResponse<null>>> {
  try {
    const { id } = await params;
    const body = await request.json();
    const { names, descriptions, price, category, imagesUrls } = body;

    console.log("Updating product:", id, "with data:", body);

    const product = await prisma.product.update({
      where: { id },
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

    return NextResponse.json(transformedProduct);
  } catch (error) {
    console.error("PUT Product Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<{ data: Product } | ApiResponse<null>>> {
  try {
    const { id } = await params;
    console.log("Deleting product:", id);

    const product = await prisma.product.delete({
      where: { id },
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

    // React Admin expects the deleted record to be returned
    return NextResponse.json({ data: transformedProduct });
  } catch (error) {
    console.error("DELETE Product Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
