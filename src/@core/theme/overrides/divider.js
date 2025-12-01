const Divider = (theme) => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: `${theme.spacing(2)} 0`,
        fontSize: "10pt",
        color: theme.palette.text.disabled
      },
    },
  },
});

export default Divider;
