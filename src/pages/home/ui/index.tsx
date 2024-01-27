import { postApi, PostCard } from "@/entities/post";

export const HomePage = () => {
  const postResult = postApi.usePostsQuery()

  if (postResult.isLoading) {
    return <div>Loading...</div>
  }

  if (postResult.isError) {
    return <div>{postResult.error.message}</div>
  }

  return (
    <div>
      {postResult.data?.map((post) => <PostCard post={post}/>)}
    </div>
  )
}
