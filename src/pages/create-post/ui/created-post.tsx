import { Post } from "@/entities/post";
import { useStyles } from './styles'

type Props = {
  post: Post
}

export const CreatedPost = ({ post }: Props) => {
  const { classes } = useStyles()
  return (
    <li className={classes.created_post}>
      <div>{post.id}</div>
      <div className={classes.created_post_title}>{post.title}</div>
    </li>
  )
}
