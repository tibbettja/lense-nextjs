const Paper = (theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: 2,
        boxShadow: "unset",
        borderBottom: `solid 4px ${theme.palette.secondary.main}`,
        borderTop: `solid 4px ${theme.palette.primary.main}`,
      }
    },
  },
});

export default Paper;
