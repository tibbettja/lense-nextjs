"use client";

import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Button,
  Box,
  CardMedia,
  useTheme,
  styled
} from "@mui/material";
import nextConfig from "next.config.mjs";
import themeConfig from "@/configs/themeConfig";
import Carousel from "@/@core/components/Carousel";

const familyImage = "images/portfolio/fam_4.jpg";
const maternityImage = "images/portfolio/mat_5.jpg";
const graduationImage = "images/portfolio/sen_4.jpg";
const brookeImage = "images/brooke.jpg";


const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container padding={0} rowSpacing={10}>
        <Grid size={12}>
          <Box>
            <Carousel
              slides={[
                { src: "images/slider/slide_0.jpg", style: {}, key: 0, width:  85 },
                { src: "images/slider/slide_1.jpg", style: {}, key: 1, width: 100 },
                { src: "images/slider/slide_2.jpg", style: {}, key: 2, width: 100 },
                { src: "images/slider/slide_3.jpg", style: {}, key: 3, width: 100 },
                { src: "images/slider/slide_4.jpg", style: {}, key: 4, width: 100 },
                { src: "images/slider/slide_5.jpg", style: {}, key: 5, width: 100 },
              ]}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 10, lg: 8 }} offset={{ xs: 1, lg: 2 }}>
          <Typography variant="h4" align="center">
            {themeConfig.appName} captures the joy and comfort of the Lake
            Norman area through intimate birth and family photography.
          </Typography>
        </Grid>
        <Grid
          container
          size={12}
          sx={{ backgroundColor: theme.palette.info.main, paddingY: -5 }}
        >
          <Grid size={{ xs: 10}} offset={{ xs: 1 }}>
            <Grid container paddingX={0} paddingY={0} columnSpacing={2}>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: '600px'
                }}
              >
                <img
                  src={brookeImage}
                  alt="Brooke Image"
                  style={{
                    maxWidth: "100%",
                    height: "90%",
                    // aspectRatio: "1667/2048",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  align="center"
                  color="info.contrastText"
                >
                  Welcome.
                </Typography>
                <Typography
                  variant="button"
                  align="center"
                  color="primary.light"
                >
                  I'm so glad you're here!
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  I believe whole-heartedly documenting your family is an
                  investment you will never regret.
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  I'm Brooke Tibbett, a lifestyle photographer serving families
                  in the greater Lake Norman area of NC.
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  My passion rests in capturing moments of authentic connection.
                  By gently guiding you with prompts and poses to set your
                  family at ease, we'll create photographs that will be
                  cherished for a lifetime.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container padding={5} rowSpacing={15} columnSpacing={10}>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3,  lg: 1.5 }}>
          <Card>
            <CardMedia
              component="img"
              image={familyImage}
              sx={{ width: "100%", height: "auto" }}
              alt="Family"
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">
                  Family
                </Typography>
              }
              sx={{ padding: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3,  lg: 0 }}>
          <Card>
            <CardMedia
              component="img"
              image={graduationImage}
              sx={{ width: "100%", height: "auto" }}
              alt="Seniors"
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">
                  Seniors
                </Typography>
              }
              sx={{ padding: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <Card>
            <CardMedia
              component="img"
              image={maternityImage}
              sx={{ width: "100%", height: "auto" }}
              alt="Maternity"
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">
                  Birth & Maternity
                </Typography>
              }
              sx={{ padding: 1 }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
