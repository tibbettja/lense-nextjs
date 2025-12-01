import fonts from "../fonts";

const Menu = (theme) => ({
  MuiMenu: {
    styleOverrides: {
      root: {
        "& .MuiMenu-paper": {
          borderRadius: 5,
          boxShadow:
            theme.palette.mode === "light"
              ? theme.shadows[8]
              : theme.shadows[9],
        },
        "& .MuiMenuItem-root": {
          letterSpacing: "0.3px",
          fontSize: "14pt",
          color: theme.palette.text.primary,
          fontFamily: fonts.header.style.fontFamily,
        }
      },
    },
  },
});

export default Menu;
