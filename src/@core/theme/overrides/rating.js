const Rating = (theme) => ({
  MuiRating: {
    styleOverrides: {
      root: {
        color: theme.palette.attention.main,
      },
    },
  },
});

export default Rating;
