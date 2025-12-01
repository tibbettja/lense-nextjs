import { hexToRgb } from "@mui/material";

const Backdrop = (theme) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: hexToRgb(theme.palette.background.default).replace(
          ")",
          ", 0.1)",
        ),
      },
      invisible: {
        backgroundColor: "transparent",
      },
    },
  },
});

export default Backdrop;
