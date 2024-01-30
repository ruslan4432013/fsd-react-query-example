import { apiClient } from "@/shared/api/base";

import { PostDetailQuery } from "./query/post.query";
import { mapDetailPost } from "./mapper/map-post";
import { DetailPostDto } from "./dto/detail-post.dto";
import { DetailPost } from "../model/detail-post";


export const getDetailPost = async ({ id }: PostDetailQuery): Promise<DetailPost | null> => {
  if (!id) {
    return null
  }

  const result = await apiClient.get<DetailPostDto>(`/posts/${id}`)

  return mapDetailPost(result)
}
