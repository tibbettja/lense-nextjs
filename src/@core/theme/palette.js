const DefaultPalette = (mode) => {
  const lightColor = "31, 27, 32";
  const darkColor = "246, 245, 241";
  const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    customColors: {
      main: `rgba(${mainColor}, 1)`,
      primaryGradient: "#8c2f39",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode,
    primary: {
      light: "#e2cfca", //
      main: "#d5b9b2", //
      dark: "#ccaba3", //
      contrastText: "#000",
    },
    secondary: {
      light: "#aa7476", //
      main: "#A26769", //
      dark: "#985d5f", //
      contrastText: "#fff",
    },
    info: {
      light: "#813653", //
      main: "#6D2E46", //
      dark: "#562437", //
      contrastText: "#fff",
    },
    success: {
      light: "#93b49a", //
      main: "#84a98c", // Darmouth Green
      dark: "#64906e", //
      contrastText: "#fff",
    },
    attention: {
      light: "#fee440", //
      main: "#fee440", // Canary
      dark: "#fee440", //
      contrastText: "#000",
    },
    warning: {
      light: "#f8cf8b", //
      main: "#F6BD60", // Fulvous
      dark: "#f4ae3e", //
      contrastText: "#000",
    },
    error: {
      light: "#e01522", // Chili Red
      main: "#C1121F", // Rufous
      dark: "#a8101a", // Barn Red
      contrastText: "#fff",
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
