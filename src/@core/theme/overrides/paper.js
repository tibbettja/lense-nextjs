const Paper = (theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: 2,
        boxShadow: "unset",
      }
    },
  },
});

export default Paper;
