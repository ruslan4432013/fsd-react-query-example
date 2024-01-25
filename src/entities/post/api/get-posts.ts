import { useQuery } from "@tanstack/react-query";

import { mapCollection } from "@/shared/lib/map-collection";
import { apiClient } from "@/shared/api/base";

import { Post } from "../model/types";
import { mapPost } from "../lib/map-post";
import { PostDto } from "./types";

const BASE_URL = '/posts'

const keys = {
  posts: (page?: string) => [BASE_URL, page].filter(Boolean),
}


type Options = {
  page?: string
}

const getPosts = async ({ page }: Options): Promise<Post[]> => {
  const url = `${BASE_URL}?page=${page}`
  const result = await apiClient.get<PostDto[]>(url)
  return mapCollection(result, mapPost)
}


export const usePosts = (options?: Options) => {
  const { page } = options ?? {}
  return useQuery({
    queryKey: keys.posts(page),
    queryFn: () => {
      return getPosts({
        page
      })
    }
  })
}




