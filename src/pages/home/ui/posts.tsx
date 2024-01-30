import { Grid } from "@mui/material";
import { Post, PostCard } from "@/entities/post";


type Props = {
  posts?: Post[],
}

export const Posts = ({ posts }: Props) => {
  return (
    <Grid container spacing={2}>
      {posts?.map((post) => (
        <Grid key={post.id} item xs={4}>
          <PostCard post={post}/>
        </Grid>
      ))}
    </Grid>
  )
}
