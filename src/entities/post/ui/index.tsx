import { Post } from "../model/types";
import { Link } from "react-router-dom";

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const { title, body, id } = post
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Show detail</Link>
    </div>
  )
}
