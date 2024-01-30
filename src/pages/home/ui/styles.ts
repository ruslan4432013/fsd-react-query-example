import { tss } from "tss-react/mui";

export const useStyles = tss
  .withParams<{ isFetching: boolean; }>()
  .create(({ isFetching }) => ({
    root: {
      padding: 4,
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center'
    },
    post_wrapper: {
      position: 'relative',
      minHeight: 500,
      marginBottom: 25
    },
    backdrop: {
      position: 'absolute',
      opacity: isFetching ? 1 : 0,
      transition: 'opacity 0.2s linear',
      background: 'rgba(0,0,0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    }
  }));
