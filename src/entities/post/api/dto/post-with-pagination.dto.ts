import { PostDto } from "./post.dto";

export type PostWithPaginationDto = {
  posts: PostDto[]
  total: number
  skip: number
  limit: number
}

