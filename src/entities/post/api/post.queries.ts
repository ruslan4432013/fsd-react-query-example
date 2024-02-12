import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getPosts } from "./get-posts";
import { getDetailPost } from "./get-detail-post";
import { PostDetailQuery } from "./query/post.query";
import { mutationOptions } from "@/shared/lib/mutation-options";
import { CreatePostDto } from "@/entities/post/api/dto/create-post.dto";
import { createPost } from "@/entities/post/api/create-post";

export const postQueries = {
  all: () => ['posts'],

  lists: () => [...postQueries.all(), 'list'],
  list: (page: number, limit: number) =>
    queryOptions({
      queryKey: [...postQueries.lists(), page, limit],
      queryFn: () => getPosts(page, limit),
      placeholderData: keepPreviousData
    }),

  details: () => [...postQueries.all(), 'detail'],
  detail: (query?: PostDetailQuery) =>
    queryOptions({
      queryKey: [...postQueries.details(), query?.id],
      queryFn: () => getDetailPost({ id: query?.id }),
      staleTime: 5000,
    }),
  create: () =>
    mutationOptions({
      mutationFn: (body: CreatePostDto) => createPost(body),
    })
}

