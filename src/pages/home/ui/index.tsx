import { postApi } from "@/entities/post";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { PostsSkeleton } from "./posts.skeleton";
import { Posts } from "./posts";
import { useStyles } from "./styles";
import { usePageParam } from "../lib/use-page-param";
import { useQuery } from "@tanstack/react-query";


const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 9

export const HomePage = () => {
  const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN

  const [page, setPage] = usePageParam(DEFAULT_PAGE)
  const { data, isFetching, isLoading } = useQuery(postApi.postQueries.list(page, itemsOnScreen))
  const { classes } = useStyles({ isFetching })

  return (
    <Box className={classes.root}>
      <Box className={classes.post_wrapper}>
        {isLoading ? (
          <PostsSkeleton limit={itemsOnScreen}/>
        ) : (
          <>
            <Posts posts={data?.posts}/>
            <Box className={classes.backdrop}>
              <CircularProgress color="primary"/>
            </Box>
          </>
        )}
      </Box>
      <Box className={classes.pagination}>
        <Pagination
          onChange={(_, page) => setPage(page)}
          page={page}
          count={data?.totalPages}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Box>
  )
}
