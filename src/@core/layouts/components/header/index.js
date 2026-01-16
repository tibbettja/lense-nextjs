"use client";

import Image from "next/image";
import {
  Grid,
  Typography,
  Button,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NextLink from 'next/link'
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";
import MobileMenu from "./components/MobileMenu";

const logoImage = 'images/logo.png'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"))

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
              <Box sx={{
                display: 'flex',
                gap: 6,
                justifyContent: 'start',
                alignItems: 'center'
              }}>
              <Link
                href="/"
                component={NextLink}
                sx={{ textDecoration: "none !important", paddingTop: 1 }}
              >
                <img src={logoImage} alt='logo' style={{ width: 90, height: 'auto' }} />
              </Link>
              <Link
                href="/"
                component={NextLink}
                sx={{ textDecoration: "none !important" }}
              >
                <Typography variant={isSmall && !isMobile ? 'logo2' : 'logo1'}>
                  {themeConfig.appName}
                </Typography>
              </Link>
              </Box>
              { !isMobile ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: 3 }}>
                  <Link component={NextLink} href='https://portfolio.btibbettphotography.com' title='Portfolio' target="_blank">
                    <Button size={ isSmall ? 'small' : undefined } variant="outlined">Portfolio</Button>
                  </Link>
                  <Link component={NextLink} href='offerings' title='Offerings'>
                    <Button size={ isSmall ? 'small' : undefined } variant="outlined">Offerings</Button>
                  </Link>
                  <Link component={NextLink} href='https://portfolio.btibbettphotography.com/contact' title='Contact Us' target='_blank'>
                    <Button size={ isSmall ? 'small' : undefined } variant="outlined">Contact Us</Button>
                  </Link>
                </Box>
              ) : (
                <MobileMenu />
              )}

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
