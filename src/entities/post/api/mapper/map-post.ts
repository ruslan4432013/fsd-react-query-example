import { Post } from "../../types";
import { PostDto } from "../dto/post.dto";
import { DetailPostDto } from "../dto/detail-post.dto";
import { DetailPost } from "../../model/detail-post";

export const mapPost = (dto: PostDto): Post => ({
  title: dto.title,
  id: dto.id,
})

export const mapDetailPost = (dto: DetailPostDto): DetailPost => ({
  title: dto.title,
  id: dto.id.toString(),
  body: dto.body,
  tags: dto.tags,
  userId: dto.userId.toString(),
  reactions: dto.reactions.toString()
})
