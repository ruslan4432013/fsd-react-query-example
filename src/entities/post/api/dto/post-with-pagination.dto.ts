import { PaginationResult } from "@/shared/api/pagination.interface";
import { PostDto } from "./post.dto";

export type PostWithPaginationDto = PaginationResult<'posts', PostDto>

