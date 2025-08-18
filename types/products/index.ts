import { LocalesEnum } from "../locales/intex";
import { PaginatedResponse } from "../pagination";

export enum ProductCategory {
  NO_CATEGORY = "No Category",
}

export type Product = {
  id: string;
  names: {
    [LocalesEnum.EN]: string;
    [LocalesEnum.IT]: string;
    [LocalesEnum.FR]: string;
  };
  price: number;
  updatedAt: Date;
  createdAt: Date;
  category: string;
  imagesUrls?: string[];
  descriptions: {
    [LocalesEnum.EN]: string;
    [LocalesEnum.IT]: string;
    [LocalesEnum.FR]: string;
  };
};

export type CreateProductInput = Omit<
  Product,
  "id" | "updatedAt" | "createdAt"
> & {
  imagesUrls?: string[];
};

export type UpdateProductInput = Partial<CreateProductInput> & {
  id: string;
};

export type ProductListResponse = {
  products: PaginatedResponse<Product>;
  total: number;
};
