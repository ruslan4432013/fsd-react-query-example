import { range } from "@/shared/lib/range";
import { Grid, Skeleton } from "@mui/material";


type Props = {
  limit: number
}

export const PostsSkeleton = ({ limit }: Props) => {
  const dummy = range(0, limit)
  return (
    <Grid sx={{ margin: '0 auto' }} container spacing={2}>
      {dummy.map((value) => (
        <Grid item key={value} xs={4}>
          <Skeleton height={150}/>
        </Grid>
      ))}
    </Grid>
  )
}
