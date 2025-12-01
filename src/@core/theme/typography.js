import fonts from "./fonts";

const Typography = (theme) => {
  return {
    h1: {
      fontWeight: 500,
      fontSize: "40pt",
      letterSpacing: "-1.5px",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    h2: {
      fontWeight: 300,
      fontSize: "36pt",
      letterSpacing: "-0.5px",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    h3: {
      fontWeight: 300,
      fontSize: "32pt",
      letterSpacing: 0,
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    h4: {
      fontWeight: 300,
      fontSize: "28pt",
      letterSpacing: "0.25px",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    h5: {
      fontWeight: 300,
      fontSize: "24pt",
      letterSpacing: 0,
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    h6: {
      letterSpacing: "0.15px",
      fontSize: "20pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    subtitle1: {
      letterSpacing: "0.15px",
      fontSize: "10pt",
      color: theme.palette.primary.main,
      fontFamily: fonts.subtitle.style.fontFamily,
    },
    subtitle2: {
      letterSpacing: "0.1px",
      fontSize: "12pt",
      color: theme.palette.primary.main,
      fontFamily: fonts.subtitle.style.fontFamily,
    },
    body1: {
      letterSpacing: "0.15px",
      fontSize: "14pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.body.style.fontFamily,
      fontWeight: 300
    },
    body2: {
      letterSpacing: "0.15px",
      fontSize: "14pt",
      color: theme.palette.text.secondary,
      fontWeight: 400,
      fontFamily: fonts.body.style.fontFamily,
    },
    button: {
      letterSpacing: "0.3px",
      fontSize: "14pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    caption: {
      letterSpacing: "0.4px",
      fontSize: "12pt",
      color: theme.palette.text.secondary,
      fontFamily: fonts.body.style.fontFamily,
    },
    overline: {
      letterSpacing: "1px",
      fontSize: "10pt",
      color: theme.palette.text.secondary,
      fontFamily: fonts.body.style.fontFamily,
    },
  };
};

export default Typography;
