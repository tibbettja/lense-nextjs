"use client";

import * as React from "react";

import { styled, Box, Grid } from "@mui/material";
import Footer from "./components/footer";
import Header from "./components/header";
import LeftBar from "./components/left-bar";
import RightBar from "./components/right-bar";
import themeConfig from "@/configs/themeConfig";

const WikiLayoutWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  backgroundColor: theme.palette.background.default,
  flexDirection: "column",
  justifyItems: "flex-start",
  alignContent: "center",
}));

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  marginTop: '68px'
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: 0,
  transition: "padding .25s ease-in-out",
}));

const WikiLayout = ({ children }) => {
  return (
    <>
      <WikiLayoutWrapper>
        <Header />
        <MainContentWrapper>
          <Grid container sx={{ width: "calc(100% - 20ch)", height: '100%', marginLeft: '20ch' }}>
            <Grid size={12}>
              <ContentWrapper>{children}</ContentWrapper>
            </Grid>
          </Grid>
        </MainContentWrapper>
        <Footer />
      </WikiLayoutWrapper>
    </>
  );
};

export default WikiLayout;
