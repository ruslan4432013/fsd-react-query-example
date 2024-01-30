import { Post } from "./post";

export type PostWithPagination = {
  posts: Post[]
  total: number
  totalPages: number
  skip: number
  limit: number
}
