import { postQueries } from "./post.queries";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


export const usePosts = (page: number, limit: number) =>
  useQuery({
    ...postQueries.list(page, limit),
    placeholderData: keepPreviousData
  })
