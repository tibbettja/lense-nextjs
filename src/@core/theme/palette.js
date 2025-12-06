const DefaultPalette = (mode) => {
  const lightColor = "31, 27, 32";
  const darkColor = "246, 245, 241";
  const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    customColors: {
      main: `rgba(${mainColor}, 1)`,
      primaryGradient: "#012160",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode,
    primary: {
      light: "#db2b39", //
      main: "#f3a712", //
      dark: "#29335c", //
      contrastText: "#fff",
    },
    secondary: {
      light: "#6a994e", //
      main: "#6a994e", //
      dark: "#6a994e", //
      contrastText: "#fff",
    },
    info: {
      light: "#a7c957", //
      main: "#a7c957", //
      dark: "#a7c957", //
      contrastText: "#000",
    },
    success: {
      light: "#D2E3A9", //
      main: "#D2E3A9", // Darmouth Green
      dark: "#D2E3A9", //
      contrastText: "#000",
    },
    attention: {
      light: "#ffbc42", //
      main: "#ffbc42", // Canary
      dark: "#ffbc42", //
      contrastText: "#000",
    },
    warning: {
      light: "#168aad", //
      main: "#168aad", // Fulvous
      dark: "#168aad", //
      contrastText: "#000",
    },
    error: {
      light: "#0c63e7", // Chili Red
      main: "#0c63e7", // Rufous
      dark: "#0c63e7", // Barn Red
      contrastText: "#000",
    },
    grey: {
      A100: "#f8f9fa",
      A200: "#e9ecef",
      A300: "#dee2e6",
      A400: "#ced4da",
      A500: "#adb5bd",
      A600: "#6c757d",
      A700: "#495057",
      A800: "#343a40",
      A900: "#212529",
    },
    bright: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000",
    },
    text: {
      primary: `rgba(${mainColor}, 0.85)`,
      secondary: `rgba(${mainColor}, 0.74)`,
      disabled: `rgba(${mainColor}, 0.57)`,
      lightPrimary: `rgba(${lightColor}, 0.85)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#f5cac3" : "#8c2f39",
      default: mode === "light" ? "#f7ede2" : "#461220",
      light: {
        paper: "#f5cac3",
        default: "#f7ede2",
      },
      dark: {
        paper: "#8c2f39",
        default: "#461220",
      },
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.30)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;
