import { Post } from "../../types";
import { PostDto } from "../dto/post.dto";
import { DetailPostDto } from "../dto/detail-post.dto";
import { DetailPost } from "../../model/detail-post";
import { CreatePostRdo } from "../rdo/create-post.rdo";

export const mapPost = (dto: PostDto | CreatePostRdo): Post => ({
  title: dto.title,
  id: +dto.id.toString(),
})

export const mapDetailPost = (dto: DetailPostDto): DetailPost => ({
  title: dto.title,
  id: dto.id.toString(),
  body: dto.body,
  tags: dto.tags,
  userId: dto.userId.toString(),
  reactions: dto.reactions.toString()
})
