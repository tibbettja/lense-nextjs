import {
  Card,
  CardHeader,
  Grid,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import themeConfig from "@/configs/themeConfig";
import Carousel from "@/@core/components/CarouselOptimized";
import NextLink from "next/link";

import Photos from "@/contants";

const familyImage = Photos.index.familyImage;
const maternityImage = Photos.index.maternityImage;
const graduationImage = Photos.index.graduationImage;
const engageImage = Photos.index.engageImage;
const brookeImage = Photos.index.brookeImage;

const slides = Photos.index.slides;

const Home = () => {
  return (
    <>
      <Grid container padding={0} rowSpacing={10}>
        <Grid size={12}>
          <Box>
            <Carousel slides={slides} randomize />
          </Box>
        </Grid>
        <Grid size={{ xs: 10, lg: 8 }} offset={{ xs: 1, lg: 2 }}>
          <Typography variant="h4" align="center">
            {themeConfig.appName} is a Lake Norman family and lifestyle
            photographer serving families throughout Mooresville, Cornelius,
            Davidson, Huntersville, and the greater Charlotte, North Carolina
            area.
          </Typography>
        </Grid>
        <Grid
          container
          size={12}
          sx={{ backgroundColor: "info.main", paddingY: -5 }}
        >
          <Grid size={{ xs: 10 }} offset={{ xs: 1 }}>
            <Grid container paddingX={0} paddingY={4} columnSpacing={2}>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <picture key={brookeImage.name}>
                  <source
                    type="image/avif"
                    srcSet={brookeImage.avif.set}
                    sizes="(max-width: 769px) 90vw, 20vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={brookeImage.webp.set}
                    sizes="(max-width: 769px) 90vw, 20vw"
                  />
                  <img
                    src={brookeImage.jpg}
                    style={{
                      borderRadius: "2px",
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      minHeight: "300px",
                    }}
                    alt={brookeImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  I specialize in documenting real connection; quiet moments,
                  joyful chaos, and the in-between seasons of family life with a
                  relaxed, natural, and timely approach that allows you to
                  simply be present.
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  As a family photographer in Mooresville, NC, my goal is to
                  create images that feel honest and real. Whether we're meeting
                  for an outdoor session or photographing your family at home,
                  sessions are designed to feel comfortable and genuine.
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  In addition to family sessions, I offer maternity, newborn,
                  and birth photography for families in the Lake Norman area.
                  These seasons move quickly, and they deserve to be documented
                  with care and respect. I have a huge passion for documenting
                  these seasons of life and consider it a great honor to be a
                  part of these big family moments.
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="info.contrastText"
                >
                  If you're looking for a photographer who values authenticity,
                  emotion, and storytelling over perfection, I would love to
                  work with you. B. Tibbett Photography proudly serves families
                  throughout Lake Norman, NC and the greater Charlotte area,
                  creating timeless images that honor the beauty of everyday
                  life.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container padding={5} rowSpacing={15} columnSpacing={10}>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <NextLink
            href="/offerings/seniors"
            title="Seniors"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card>
              <CardMedia sx={{ width: "100%", height: "auto" }}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet={graduationImage.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={graduationImage.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={graduationImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={graduationImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </CardMedia>
              <CardHeader
                title={
                  <Typography variant="h4" align="center">
                    Seniors
                  </Typography>
                }
                sx={{ padding: 1 }}
              />
            </Card>
          </NextLink>
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <NextLink
            href="/offerings/engagement"
            title="Engagement"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card>
              <CardMedia sx={{ width: "100%", height: "auto" }}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet={engageImage.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={engageImage.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={engageImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={engageImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </CardMedia>
              <CardHeader
                title={
                  <Typography variant="h4" align="center">
                    Engagement
                  </Typography>
                }
                sx={{ padding: 1 }}
              />
            </Card>
          </NextLink>
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <NextLink
            href="/offerings/birth-maternity"
            title="Birth & Maternity"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card>
              <CardMedia sx={{ width: "100%", height: "auto" }}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet={maternityImage.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={maternityImage.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={maternityImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={maternityImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </CardMedia>
              <CardHeader
                title={
                  <Typography variant="h4" align="center">
                    Birth & Maternity
                  </Typography>
                }
                sx={{ padding: 1 }}
              />
            </Card>
          </NextLink>
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <NextLink
            href="/offerings/family"
            title="Family"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card>
              <CardMedia sx={{ width: "100%", height: "auto" }}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet={familyImage.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={familyImage.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={familyImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={familyImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </CardMedia>
              <CardHeader
                title={
                  <Typography variant="h4" align="center">
                    Family
                  </Typography>
                }
                sx={{ padding: 1 }}
              />
            </Card>
          </NextLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

export const metadata = {
  title: themeConfig.title,
  description: themeConfig.description,
};
