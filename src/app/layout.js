import BaseLayout from "@/@core/layouts/BaseLayout";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ThemeComponent from "@/@core/theme/ThemeComponent";

import fonts from "@/@core/theme/fonts";

import themeConfig from "@/configs/themeConfig";

const initialThemeSettings = {
  themeColor: "primary",
  mode: "light",
  contentWidth: 800,
};

const ServerApp = ({ children }) => {
  return (
    <html lang="en">
      <body className={fonts.body.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeComponent settings={initialThemeSettings}>
            <BaseLayout>{children}</BaseLayout>
          </ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default ServerApp;

export const metadata = {
  title: themeConfig.appDescription,
  description: themeConfig.appDescription,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f2f6" },
    { media: "(prefers-color-scheme: dark)", color: "#000405" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
