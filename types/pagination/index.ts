export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type PaginatedRequest = {
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: "ASC" | "DESC";
};
// Use React Admin params everywhere
export type PaginationParams = {
  _start?: number;
  _end?: number;
  _sort?: string;
  _order?: "ASC" | "DESC";
};

export function getPageInfo(params: PaginationParams) {
  const start = params._start || 0;
  const end = params._end || 10;
  const pageSize = end - start;
  const page = Math.floor(start / pageSize) + 1;

  return { page, pageSize, start, end };
}
