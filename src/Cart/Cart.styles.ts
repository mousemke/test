import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    block: {
      borderBottom: "1px solid #1976d2",
      height: 80,
      padding: 20,
      position: "relative"
    },
    blockCredits: {
      "p&": {
        bottom: 20,
        fontWeight: 700,
        position: "absolute",
        textAlign: "right",
        width: "calc(100% - 40px)"
      }
    },
    blocksList: {
      height: "calc(100vh - 245px)",
      overflowY: "scroll"
    },
    buyNowButton: {
      width: "100%"
    },
    cartHeader: {
      borderBottom: "1px solid #ee52ff",
      boxSizing: "border-box",
      height: 50,
      padding: 14,
      paddingLeft: 20
    },
    cartWrapper: {
      borderLeft: "1px solid #ee52ff",
      minWidth: 250
    },
    footer: {
      backgroundColor: "#fff",
      borderTop: "1px solid #ee52ff",
      bottom: 0,
      height: 90,
      minWidth: 210,
      padding: 20,
      position: "absolute"
    },
    notEnoughCredits: {
      pointerEvents: "none"
    },
    totalBlockCredits: {
      "span&": {
        fontWeight: 700,
      }
    },
    totalBlockCreditsWrapper: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 25
    }
  },
  {
    name: "Cart"
  }
);

export default useStyles;
