import { SpeedDial, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useStyles } from './styles'
import { CreatePostForm } from "@/features/create-post";
import { useState } from "react";
import { Post } from "@/entities/post";
import { CreatedPost } from "@/pages/create-post/ui/created-post";
import { useNavigate } from "react-router-dom";


export const CreatePostPage = () => {
  const { classes } = useStyles()
  const [createdPosts, setCreatedPosts] = useState<Post[]>([])
  const navigate = useNavigate()
  const handleCreatePost = (post: Post) => {
    setCreatedPosts((prevState) => [...prevState, post])
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      <SpeedDial
        onClick={handleBack}
        className={classes.dial}
        direction={'right'}
        ariaLabel={'up'}
        icon={<ArrowBackIcon/>}
      />
      <div className={classes.post_page}>
        <Typography variant='h4'>Create post</Typography>
        <CreatePostForm onCreate={handleCreatePost}/>
        <div className={classes.created_post_wrapper}>
          <h3>Created Posts</h3>
          <ul>
            <li className={classes.created_post}>
              <div>ID</div>
              <div className={classes.created_post_title}>TITLE</div>
            </li>
            {createdPosts.map((post) => (
              <CreatedPost key={post.id} post={post}/>
            ))}
          </ul>
        </div>
      </div>
    </>

  )
}
