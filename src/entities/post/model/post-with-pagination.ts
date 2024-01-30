import { PaginationResult } from "@/shared/api/pagination.interface";
import { Post } from "./post";

export type PostWithPagination = PaginationResult<'posts', Post>
