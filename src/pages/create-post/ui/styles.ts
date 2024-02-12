import { tss } from "tss-react/mui";

export const useStyles = tss
  .create(() => ({
    post_page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 20,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
    },
    dial: {
      position: 'fixed',
      top: 5,
      left: 5,
    },
    created_post_wrapper: {
      minWidth: 320,
      textAlign: 'center',
    },

    created_post: {
      display: 'flex',
      gap: 30,
      width: '100%',
      '&:first-child': {
        marginBottom: 20,
        borderBottom: '1px solid black'
      },
    },
    created_post_title: {
      width: '100%'
    }
  }));
