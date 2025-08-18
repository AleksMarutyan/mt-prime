import { Product, CreateProductInput } from "@/types/products";

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Reuse existing product types
export type ProductResponse = Product;
export type ProductCreateRequest = CreateProductInput;

// Pagination types
export interface PaginationQuery {
  _start?: string;
  _end?: string;
  _sort?: string;
  _order?: string;
}
