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
        zIndex: 2,
        width: "100%",
        bgcolor: isMobile ? theme.palette.background.default : "transparent",
      }}
    >
      <Grid
        container
        spacing={0}
        component={Box}
        sx={{
          width: "100%",
          bgcolor: isMobile ? theme.palette.background.default : "transparent",
        }}
      >
        <Grid
          size={{ sm: 12, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 3,
            borderBottom: `solid 4px ${theme.palette.primary.dark}`,
            borderRight: `solid 4px ${theme.palette.primary.dark}`,
            borderLeft: isMobile && `solid 4px ${theme.palette.primary.dark}`,
            borderBottomRightRadius: "34px",
            borderBottomLeftRadius: isMobile && "34px",
          }}
          className={fonts.logo.className}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: `solid 4px ${theme.palette.primary.main}`,
              borderRight: `solid 4px ${theme.palette.primary.main}`,
              borderLeft: isMobile && `solid 4px ${theme.palette.primary.main}`,
              borderBottomRightRadius: "29px",
              borderBottomLeftRadius: isMobile && "29px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderBottom: `solid 4px ${theme.palette.primary.light}`,
                borderRight: `solid 4px ${theme.palette.primary.light}`,
                borderLeft: isMobile && `solid 4px ${theme.palette.primary.light}`,
                borderBottomRightRadius: "25px",
                borderBottomLeftRadius: isMobile && "25px",
                paddingX: 6,
                paddingY: 2,
                backgroundColor: theme.palette.primary.paper,
              }}
            >
              <Link
                href="/"
                component={NextLink}
                sx={{ textDecoration: "none !important" }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  {themeConfig.appName}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* {isMobile && (
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <MobileMenu />
          </Grid>
        )} */}
        { !isMobile && (<Grid size={6}></Grid> )}
      </Grid>
        { !isMobile && (
            <Box
              sx={{
                height: "80vh",
                borderRight: `solid 4px ${theme.palette.primary.dark}`,
                borderTop: `solid 4px ${theme.palette.primary.dark}`,
                borderBottom: `solid 4px ${theme.palette.primary.dark}`,
                borderTopRightRadius: "29px",
                borderBottomRightRadius: "29px",
                width: '20ch'
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  borderRight: `solid 4px ${theme.palette.primary.main}`,
                  borderTop: `solid 4px ${theme.palette.primary.main}`,
                  borderBottom: `solid 4px ${theme.palette.primary.main}`,
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
              >
                <Stack
                  sx={{
                    height: "100%",
                    borderRight: `solid 4px ${theme.palette.primary.light}`,
                    borderTop: `solid 4px ${theme.palette.primary.light}`,
                    borderBottom: `solid 4px ${theme.palette.primary.light}`,
                    borderTopRightRadius: "21px",
                    borderBottomRightRadius: "21px",
                    backgroundColor: theme.palette.primary.paper,
                  }}
                >
                  <ListItem>
                    <Link component={NextLink} href="/about" title="About">
                      <Typography variant="h6">About</Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link component={NextLink} href="/portfolio" title="Portfolio">
                      <Typography variant="h6">Portfolio</Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link component={NextLink} href="/experience" title="Experience">
                      <Typography variant="h6">Experience</Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link component={NextLink} href="/pricing" title="Pricing">
                      <Typography variant="h6">Pricing</Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link component={NextLink} href="/schedule" title="Schedule">
                      <Typography variant="h6">Schedule</Typography>
                    </Link>
                  </ListItem>
                </Stack>
              </Box>
            </Box>
        )}
    </Box>
  );
};

export default Header;
