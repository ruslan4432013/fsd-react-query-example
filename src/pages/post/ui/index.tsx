import { useParams } from "react-router-dom";
import { postApi } from '@/entities/post'
import { useQuery } from "@tanstack/react-query";

type Params = {
  postId: string
}

export const PostPage = () => {
  const { postId } = useParams<Params>();
  const id = parseInt(postId || '')
  const {
    data: post,
    error,
    isLoading,
    isError
  } = useQuery(postApi.postQueries.detail({ id }))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !post) {
    return <>{error?.message}</>
  }

  return (
    <div>
      <p>Post id: {post.id}</p>
      <div>
        <h1>{post.title}</h1>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
      <div>
        Owner: {post.userId}
      </div>
    </div>
  )
}
