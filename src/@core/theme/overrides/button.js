import themeConfig from "@/configs/themeConfig";

const Button = (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        borderRadius: 2,
        lineHeight: 1.71,
        letterSpacing: "1px",
        padding: `${theme.spacing(1, 2)}`,
      },
      contained: {
        boxShadow: theme.shadows[3],
        padding: `${theme.spacing(1.875, 5.5)}`,
      },
      outlined: {
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        padding: `${theme.spacing(0.5, 2)}`,
      },
      sizeMedium: {
        fontSize: "16pt",
      },
      sizeLarge: {
        fontSize: "16pt",
      },
      text: {
        color: theme.palette.text.primary,
      },
      endIcon: {
        marginLeft: 0,
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple,
      variant: "text",
      size: "medium",
    },
  },
});

export default Button;
