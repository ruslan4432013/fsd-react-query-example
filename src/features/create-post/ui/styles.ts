import { tss } from "tss-react/mui";

export const useStyles = tss
  .create(() => ({
    post_page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
    },
    create_form: {
      display: "flex",
      flexDirection: 'column',
      padding: '10px',
      border: 'solid 1px black',
      gap: '20px'
    },
    dial: {
      position: 'fixed',
      top: 5,
      left: 5,
    },
  }));
