import { apiClient } from "@/shared/api/base";
import { CreatePostDto } from "./dto/create-post.dto";
import { mapPost } from "./mapper/map-post";
import { CreatePostRdo } from "./rdo/create-post.rdo";


export const createPost = async (body: CreatePostDto) => {

  const res =  await apiClient.post<CreatePostRdo>('/posts/add', body)
  return mapPost(res)
}
