const Paper = (theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: 0,
        boxShadow: "unset",
      }
    },
  },
});

export default Paper;
