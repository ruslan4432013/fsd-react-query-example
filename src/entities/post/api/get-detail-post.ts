import { apiClient } from "@/shared/api/base";

import { PostDetailQuery } from "./query/post.query";
import { mapDetailPost } from "./mapper/map-post";
import { DetailPostDto } from "./dto/detail-post.dto";
import { DetailPost } from "../model/detail-post";

const BASE_URL = '/posts'

export const getDetailPost = async ({ id }: PostDetailQuery): Promise<DetailPost | null> => {
  if (!id) {
    return null
  }

  const url = `${BASE_URL}/${id}`
  const result = await apiClient.get<DetailPostDto>(url)

  return mapDetailPost(result)
}
