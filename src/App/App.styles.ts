import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        margin: 0
      }
    },
    appWrapper: {
      display: "flex"
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
