import themeConfig from "@/configs/themeConfig";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";
import { Masonry } from "@mui/lab";

import Photos from "@/contants";
const images = Photos.portfolio.images


const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid size={12} container>
        <Grid size={12}>
          <Masonry columns={{ xs: 2, lg: 4 }} spacing={2}>
            {images
              .sort(() => Math.random() - 0.5)
              .map((image) => (
                <picture key={image.name}>
                  <source
                    type="image/avif"
                    srcSet={image.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={image.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={image.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              ))}
          </Masonry>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Portfolio | ${themeConfig.appName}`,
  description: themeConfig.description,
};
