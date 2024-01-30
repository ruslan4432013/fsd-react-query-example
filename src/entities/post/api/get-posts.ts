import { apiClient } from "@/shared/api/base";

import { PostWithPaginationDto } from "./dto/post-with-pagination.dto";
import { PostQuery } from "./query/post.query";
import { mapPost } from "./mapper/map-post";
import { PostWithPagination } from "../model/post-with-pagination";


const calculatePostPage = (totalCount: number, limit: number) => Math.floor(totalCount / limit)

export const getPosts = async (page: number, limit: number): Promise<PostWithPagination> => {
  const skip = page * limit
  const query: PostQuery = { skip, limit }
  const result = await apiClient.get<PostWithPaginationDto>('/posts', query)

  return ({
    posts: result.posts.map(post => mapPost(post)),
    limit: result.limit,
    skip: result.skip,
    total: result.total,
    totalPages: calculatePostPage(result.total, limit)
  })
}
