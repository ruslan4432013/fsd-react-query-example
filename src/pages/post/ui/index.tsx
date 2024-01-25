import { useParams } from "react-router-dom";
import { postApi } from '@/entities/post'

type Params = {
  postId: string
}

export const PostPage = () => {
  const { postId } = useParams<Params>();
  const { data, error, isLoading, isError } = postApi.useDetailPost({ id: postId })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <>{error?.message}</>
  }

  const { id, title, body, userId } = data ?? {}

  return (
    <div>
      <p>Post id: {id}</p>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        Owner: {userId}
      </div>
    </div>
  )
}
