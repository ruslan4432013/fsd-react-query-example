import { TextField } from "@mui/material";
import { useStyles } from './styles'
import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from '@/entities/post'
import { LoadingButton } from "@mui/lab";
import { useCreatePost } from "../api/use-create-post";


const DEFAULT_USER_ID = '4'

type Props = {
  onCreate?: (post: Post) => void | Promise<void>
}

export const CreatePostForm = ({ onCreate }: Props) => {
  const { classes } = useStyles()
  const [title, setTitle] = useState('')
  const { mutateAsync, isPending } = useCreatePost()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const reset = () => {
    setTitle('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title) return

    const res = await mutateAsync({ title, userId: DEFAULT_USER_ID })
    reset()
    await onCreate?.(res)
  }

  return (
    <form className={classes.create_form} onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        label="Title"
        name='title'
        variant="outlined"
        value={title}
      />
      <LoadingButton type="submit" variant="contained" loading={isPending}>Create</LoadingButton>
    </form>
  )
}
