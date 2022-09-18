import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    blocksListWrapper: {
      display: "flex",
      flexWrap: "wrap",
      height: "calc(100vh - 65px)",
      justifyContent: "space-evenly",
      overflowY: "scroll"
    }
  },
  {
    name: "BlocksList"
  }
);

export default useStyles;
