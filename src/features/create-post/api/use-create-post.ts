import { useMutation } from "@tanstack/react-query";
import { postApi } from '@/entities/post'

export const useCreatePost = () =>
  useMutation({
    mutationFn: postApi.createPost
  })
