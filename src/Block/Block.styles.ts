import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    addToCartButton: {
      "button&": {
        bottom: 10,
        position: "absolute",
        width: "calc(100% - 30px)"
      }
    },
    blockWrapper: {
      border: "1px solid #1976d2",
      height: 175,
      margin: 10,
      padding: 15,
      position: "relative",
      width: 150
    },
    credits: {
      "div&": {
        fontWeight: 700
      }
    },
    displayName: {
      height: "6rem"
    }
  },
  {
    name: "Block"
  }
);

export default useStyles;
