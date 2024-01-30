import { useQuery } from "@tanstack/react-query";
import { postQueries } from "@/entities/post/api/post.queries";

export const useDetailPost = (id?: number) =>
  useQuery({
    ...postQueries.detail({ id }),
    staleTime: 5000,
  })
