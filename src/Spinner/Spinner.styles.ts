import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@keyframes lds-ripple": {
      "0%": {
        top: 36,
        left: 36,
        width: 0,
        height: 0,
        opacity: 0
      },
      "4.9%": {
        top: 36,
        left: 36,
        width: 0,
        height: 0,
        opacity: 0
      },
      "5%": {
        top: 36,
        left: 36,
        width: 0,
        height: 0,
        opacity: 1
      },
      "100%": {
        top: 0,
        left: 0,
        width: 72,
        height: 72,
        opacity: 0
      }
    },
    spinnerWrapper: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    spinner: {
      display: "inline-block",
      position: "relative",
      width: 80,
      height: 80,

      "& div": {
        position: "absolute",
        border: "4px solid #1976d2",
        opacity: 1,
        borderRadius: "50%",
        animation: "$lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",

        "&:first-child": {
          borderColor: "#ee52ff"
        },

        "&:nth-child(2)": {
          animationDelay: "-0.5s"
        }
      },

      "& ~ *": {
        display: "none"
      }
    }
  },
  {
    name: "Spinner"
  }
);

export default useStyles;
