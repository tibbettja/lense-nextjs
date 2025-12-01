"use client";

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

import Overrides from "./overrides";
import Typography from "./typography";
import GlobalStyling from "./globalStyles";
import themeConfigBuilder from "./themeConfigBuilder";

const ThemeComponent = ({ children, settings }) => {
  const builtThemeConfig = themeConfigBuilder(settings);
  const baseTheme = createTheme(builtThemeConfig);
  const theme = createTheme(baseTheme, {
    components: { ...Overrides(baseTheme) },
    typography: { ...Typography(baseTheme) },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling()} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
