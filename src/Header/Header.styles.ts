import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    creditsRemaining: {
      "span&": {
        fontWeight: 700,
        marginRight: "20%"
      }
    },
    header: {
      borderBottom: "1px solid #ee52ff",
      boxSizing: "border-box",
      display: "flex",
      height: 65,
      justifyContent: "flex-end",
      padding: 20,

      "& > span:first-child": {
        marginRight: 10
      }
    }
  },
  {
    name: "Header"
  }
);

export default useStyles;
