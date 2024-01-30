import { Post } from "../model/post";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const { title, id } = post
  return (
    <Box
      sx={{
        height: 150,
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        gap: 2,
        border: 'solid 1px black'
      }}
    >
      <Typography variant='h6' fontSize={12} textAlign={'center'} fontWeight={600}>Post: {title}</Typography>
      <Button variant='outlined' component={Link} to={`/posts/${id}`}>Show detail</Button>
    </Box>
  )
}
