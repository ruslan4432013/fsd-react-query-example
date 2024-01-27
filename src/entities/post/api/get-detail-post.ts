import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/shared/api/base";

import { Post } from "../model/types";
import { mapPost } from "../lib/map-post";
import { PostDto } from "./types";

const BASE_URL = '/posts'


const keys = {
  root: () => [BASE_URL, 'detail'],
  post: (id?: string) => [...keys.root(), id],
}


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


export const useDetailPostQuery = (options: Options) => {
  const { id } = options
  return useQuery({
    queryKey: keys.post(id),
    queryFn: () => {
      return getPost({
        id
      })
    }
  })
}




