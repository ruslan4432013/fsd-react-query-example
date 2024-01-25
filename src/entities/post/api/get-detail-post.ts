import { useQuery } from "@tanstack/react-query";

import { POST_KEY } from "@/shared/config/query-keys";
import { apiClient } from "@/shared/api/base";

import { Post } from "../model/types";
import { mapPost } from "../lib/map-post";
import { PostDto } from "./types";

const keys = {
  post: (id?: string) => [POST_KEY, id],
}

const BASE_URL = '/posts'

type Options = {
  id?: string
}

const getPost = async ({ id }: Options): Promise<Post | null> => {
  if (!id) {
    return null
  }

  const url = `${BASE_URL}/${id}`
  const result = await apiClient.get<PostDto>(url)
  return mapPost(result)
}


export const useDetailPost = (options: Options) => {
  const { id } = options
  return useQuery({
    queryKey: keys.post(id),
    queryFn: ({ queryKey }) => {
      return getPost({
        id: queryKey[1]
      })
    }
  })
}




