"use client";

import Image from "next/image";
import {
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ListItem, Stack } from "@mui/material";
import NextLink from 'next/link'
import { Menu as MenuIcon } from "@mui/icons-material";
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";
import AboutMenu from "./components/AboutMenu";
import GrowMenu from "./components/GrowMenu";
import MobileMenu from "./components/MobileMenu";
import nextConfig from "next.config.mjs";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Grid
        container
        spacing={0}
        component={Box}
        sx={{
          width: "100%",
          bgcolor: theme.palette.background.default,
        }}
      >
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 3,
          }}
          className={fonts.logo.className}
        >
          <Box
            sx={{
              width: "100%",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                paddingX: 6,
                paddingY: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Link
                href="/"
                component={NextLink}
                sx={{ textDecoration: "none !important" }}
              >
                <Typography variant="logo">
                  {themeConfig.appName}
                </Typography>
              </Link>
              <MobileMenu />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
