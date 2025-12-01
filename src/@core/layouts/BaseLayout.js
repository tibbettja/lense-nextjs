"use client";

import * as React from "react";

import { styled, Box } from "@mui/material";
import Footer from "./components/footer";
import Header from "./components/header";
import themeConfig from "@/configs/themeConfig";

const BaseLayoutWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyItems: "flex-start",
  alignContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: 0,
  transition: "padding .25s ease-in-out",
}));

const BaseLayout = ({ children }) => {
  return (
    <>
      <BaseLayoutWrapper>
        <Header />
        <MainContentWrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </MainContentWrapper>
        <Footer />
      </BaseLayoutWrapper>
    </>
  );
};

export default BaseLayout;
