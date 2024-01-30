export type PaginationResult<Key extends string, Entity> = {
  [k in Key]: Entity[]
} & {
  total: number
  totalPages: number
  skip: number
  limit: number
}

