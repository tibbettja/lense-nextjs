"use client";

import NextLink from "next/link";
import {
  Grid,
  Box,
  List,
  useTheme,
  ListItem,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import themeConfig from "@/configs/themeConfig";
import nextConfig from "next.config.mjs";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={5} padding={5} sx={{ alignItems: "stretch" }}>
      <Grid size={12}>
        <Divider textAlign="center">
          &copy; {themeConfig.appName} 2025
        </Divider>
      </Grid>
    </Grid>
  );
};

export default Footer;
