import fonts from "../fonts";

const Typography = (theme) => ({
  MuiTypography: {
    styleOverrides: {
      root: {
        gutterBottom: {
          marginBottom: theme.spacing(2),
        },
      },
    },
  },
});

export default Typography;
