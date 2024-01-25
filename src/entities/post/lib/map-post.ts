import { Post } from "../model/types";
import { PostDto } from "../api/types";

export const mapPost = (dto: PostDto): Post => ({
  body: dto.body,
  title: dto.title,
  userId: dto.userId.toString(),
  id: dto.id.toString()
})
