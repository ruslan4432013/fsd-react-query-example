import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { PostPage } from "@/pages/post";
import { CreatePostPage } from "@/pages/create-post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/posts/:postId",
    element: <PostPage/>
  },
  {
    path: "/create-post",
    element: <CreatePostPage/>
  },
]);
