
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
  styled
} from "@mui/material";
import nextConfig from "next.config.mjs";
import themeConfig from "@/configs/themeConfig";
import Carousel from "@/@core/components/CarouselOptimized";

const familyImage = { name: 'fam_4', avif: { set: 'images/portfolio/fam_4-400.avif 400w, images/portfolio/fam_4-800.avif 800w, images/portfolio/fam_4-1200.avif 1200w, images/portfolio/fam_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_4-400.webp 400w, images/portfolio/fam_4-800.webp 800w, images/portfolio/fam_4-1200.webp 1200w, images/portfolio/fam_4-1600.webp 1600w' }, jpg: 'images/portfolio/fam_4.jpg' };
const maternityImage = { name: 'mat_5', avif: { set: 'images/portfolio/mat_5-400.avif 400w, images/portfolio/mat_5-800.avif 800w, images/portfolio/mat_5-1200.avif 1200w, images/portfolio/mat_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_5-400.webp 400w, images/portfolio/mat_5-800.webp 800w, images/portfolio/mat_5-1200.webp 1200w, images/portfolio/mat_5-1600.webp 1600w' }, jpg: 'images/portfolio/mat_5.jpg' };
const graduationImage = { name: 'sen_4', avif: { set: 'images/portfolio/sen_4-400.avif 400w, images/portfolio/sen_4-800.avif 800w, images/portfolio/sen_4-1200.avif 1200w, images/portfolio/sen_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_4-400.webp 400w, images/portfolio/sen_4-800.webp 800w, images/portfolio/sen_4-1200.webp 1200w, images/portfolio/sen_4-1600.webp 1600w' }, jpg: 'images/portfolio/sen_4.jpg' };
const engageImage = { name: 'eng_4', avif: { set: 'images/portfolio/eng_4-400.avif 400w, images/portfolio/eng_4-800.avif 800w, images/portfolio/eng_4-1200.avif 1200w, images/portfolio/eng_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_4-400.webp 400w, images/portfolio/eng_4-800.webp 800w, images/portfolio/eng_4-1200.webp 1200w, images/portfolio/eng_4-1600.webp 1600w' }, jpg: 'images/portfolio/eng_4.jpg' };
const brookeImage = { name: 'brooke', avif: { set: 'images/brooke-400.avif 400w, images/brooke-800.avif 800w, images/brooke-1200.avif 1200w, images/brooke-1600.avif 1600w' }, webp: { set: 'images/brooke-400.webp 400w, images/brooke-800.webp 800w, images/brooke-1200.webp 1200w, images/brooke-1600.webp 1600w' }, jpg: 'images/brooke.jpg' };

const slides = [
    { name: 'slide_1', avif: { set: 'images/slider/slide_1-400.avif 400w, images/slider/slide_1-800.avif 800w, images/slider/slide_1-1200.avif 1200w, images/slider/slide_1-1600.avif 1600w' }, webp: { set: 'images/slider/slide_1-400.webp 400w, images/slider/slide_1-800.webp 800w, images/slider/slide_1-1200.webp 1200w, images/slider/slide_1-1600.webp 1600w' }, jpg: 'images/slider/slide_1.jpg' },
    { name: 'slide_2', avif: { set: 'images/slider/slide_2-400.avif 400w, images/slider/slide_2-800.avif 800w, images/slider/slide_2-1200.avif 1200w, images/slider/slide_2-1600.avif 1600w' }, webp: { set: 'images/slider/slide_2-400.webp 400w, images/slider/slide_2-800.webp 800w, images/slider/slide_2-1200.webp 1200w, images/slider/slide_2-1600.webp 1600w' }, jpg: 'images/slider/slide_2.jpg' },
    { name: 'slide_3', avif: { set: 'images/slider/slide_3-400.avif 400w, images/slider/slide_3-800.avif 800w, images/slider/slide_3-1200.avif 1200w, images/slider/slide_3-1600.avif 1600w' }, webp: { set: 'images/slider/slide_3-400.webp 400w, images/slider/slide_3-800.webp 800w, images/slider/slide_3-1200.webp 1200w, images/slider/slide_3-1600.webp 1600w' }, jpg: 'images/slider/slide_3.jpg' },
    { name: 'slide_4', avif: { set: 'images/slider/slide_4-400.avif 400w, images/slider/slide_4-800.avif 800w, images/slider/slide_4-1200.avif 1200w, images/slider/slide_4-1600.avif 1600w' }, webp: { set: 'images/slider/slide_4-400.webp 400w, images/slider/slide_4-800.webp 800w, images/slider/slide_4-1200.webp 1200w, images/slider/slide_4-1600.webp 1600w' }, jpg: 'images/slider/slide_4.jpg' },
    { name: 'slide_5', avif: { set: 'images/slider/slide_5-400.avif 400w, images/slider/slide_5-800.avif 800w, images/slider/slide_5-1200.avif 1200w, images/slider/slide_5-1600.avif 1600w' }, webp: { set: 'images/slider/slide_5-400.webp 400w, images/slider/slide_5-800.webp 800w, images/slider/slide_5-1200.webp 1200w, images/slider/slide_5-1600.webp 1600w' }, jpg: 'images/slider/slide_5.jpg' },
    // { name: 'eng_1', avif: { set: 'images/portfolio/eng_1-400.avif 400w, images/portfolio/eng_1-800.avif 800w, images/portfolio/eng_1-1200.avif 1200w, images/portfolio/eng_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_1-400.webp 400w, images/portfolio/eng_1-800.webp 800w, images/portfolio/eng_1-1200.webp 1200w, images/portfolio/eng_1-1600.webp 1600w' }, jpg: 'images/portfolio/eng_1.jpg' },
    // { name: 'eng_2', avif: { set: 'images/portfolio/eng_2-400.avif 400w, images/portfolio/eng_2-800.avif 800w, images/portfolio/eng_2-1200.avif 1200w, images/portfolio/eng_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_2-400.webp 400w, images/portfolio/eng_2-800.webp 800w, images/portfolio/eng_2-1200.webp 1200w, images/portfolio/eng_2-1600.webp 1600w' }, jpg: 'images/portfolio/eng_2.jpg' },
    // { name: 'eng_3', avif: { set: 'images/portfolio/eng_3-400.avif 400w, images/portfolio/eng_3-800.avif 800w, images/portfolio/eng_3-1200.avif 1200w, images/portfolio/eng_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_3-400.webp 400w, images/portfolio/eng_3-800.webp 800w, images/portfolio/eng_3-1200.webp 1200w, images/portfolio/eng_3-1600.webp 1600w' }, jpg: 'images/portfolio/eng_3.jpg' },
    // { name: 'eng_4', avif: { set: 'images/portfolio/eng_4-400.avif 400w, images/portfolio/eng_4-800.avif 800w, images/portfolio/eng_4-1200.avif 1200w, images/portfolio/eng_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_4-400.webp 400w, images/portfolio/eng_4-800.webp 800w, images/portfolio/eng_4-1200.webp 1200w, images/portfolio/eng_4-1600.webp 1600w' }, jpg: 'images/portfolio/eng_4.jpg' },
    // { name: 'eng_5', avif: { set: 'images/portfolio/eng_5-400.avif 400w, images/portfolio/eng_5-800.avif 800w, images/portfolio/eng_5-1200.avif 1200w, images/portfolio/eng_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_5-400.webp 400w, images/portfolio/eng_5-800.webp 800w, images/portfolio/eng_5-1200.webp 1200w, images/portfolio/eng_5-1600.webp 1600w' }, jpg: 'images/portfolio/eng_5.jpg' },
    // { name: 'eng_6', avif: { set: 'images/portfolio/eng_6-400.avif 400w, images/portfolio/eng_6-800.avif 800w, images/portfolio/eng_6-1200.avif 1200w, images/portfolio/eng_6-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_6-400.webp 400w, images/portfolio/eng_6-800.webp 800w, images/portfolio/eng_6-1200.webp 1200w, images/portfolio/eng_6-1600.webp 1600w' }, jpg: 'images/portfolio/eng_6.jpg' },
    // { name: 'fam_1', avif: { set: 'images/portfolio/fam_1-400.avif 400w, images/portfolio/fam_1-800.avif 800w, images/portfolio/fam_1-1200.avif 1200w, images/portfolio/fam_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_1-400.webp 400w, images/portfolio/fam_1-800.webp 800w, images/portfolio/fam_1-1200.webp 1200w, images/portfolio/fam_1-1600.webp 1600w' }, jpg: 'images/portfolio/fam_1.jpg' },
    // { name: 'fam_2', avif: { set: 'images/portfolio/fam_2-400.avif 400w, images/portfolio/fam_2-800.avif 800w, images/portfolio/fam_2-1200.avif 1200w, images/portfolio/fam_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_2-400.webp 400w, images/portfolio/fam_2-800.webp 800w, images/portfolio/fam_2-1200.webp 1200w, images/portfolio/fam_2-1600.webp 1600w' }, jpg: 'images/portfolio/fam_2.jpg' },
    // { name: 'fam_3', avif: { set: 'images/portfolio/fam_3-400.avif 400w, images/portfolio/fam_3-800.avif 800w, images/portfolio/fam_3-1200.avif 1200w, images/portfolio/fam_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_3-400.webp 400w, images/portfolio/fam_3-800.webp 800w, images/portfolio/fam_3-1200.webp 1200w, images/portfolio/fam_3-1600.webp 1600w' }, jpg: 'images/portfolio/fam_3.jpg' },
    // { name: 'fam_4', avif: { set: 'images/portfolio/fam_4-400.avif 400w, images/portfolio/fam_4-800.avif 800w, images/portfolio/fam_4-1200.avif 1200w, images/portfolio/fam_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_4-400.webp 400w, images/portfolio/fam_4-800.webp 800w, images/portfolio/fam_4-1200.webp 1200w, images/portfolio/fam_4-1600.webp 1600w' }, jpg: 'images/portfolio/fam_4.jpg' },
    // { name: 'mat_1', avif: { set: 'images/portfolio/mat_1-400.avif 400w, images/portfolio/mat_1-800.avif 800w, images/portfolio/mat_1-1200.avif 1200w, images/portfolio/mat_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_1-400.webp 400w, images/portfolio/mat_1-800.webp 800w, images/portfolio/mat_1-1200.webp 1200w, images/portfolio/mat_1-1600.webp 1600w' }, jpg: 'images/portfolio/mat_1.jpg' },
    // { name: 'mat_2', avif: { set: 'images/portfolio/mat_2-400.avif 400w, images/portfolio/mat_2-800.avif 800w, images/portfolio/mat_2-1200.avif 1200w, images/portfolio/mat_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_2-400.webp 400w, images/portfolio/mat_2-800.webp 800w, images/portfolio/mat_2-1200.webp 1200w, images/portfolio/mat_2-1600.webp 1600w' }, jpg: 'images/portfolio/mat_2.jpg' },
    // { name: 'mat_3', avif: { set: 'images/portfolio/mat_3-400.avif 400w, images/portfolio/mat_3-800.avif 800w, images/portfolio/mat_3-1200.avif 1200w, images/portfolio/mat_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_3-400.webp 400w, images/portfolio/mat_3-800.webp 800w, images/portfolio/mat_3-1200.webp 1200w, images/portfolio/mat_3-1600.webp 1600w' }, jpg: 'images/portfolio/mat_3.jpg' },
    // { name: 'mat_4', avif: { set: 'images/portfolio/mat_4-400.avif 400w, images/portfolio/mat_4-800.avif 800w, images/portfolio/mat_4-1200.avif 1200w, images/portfolio/mat_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_4-400.webp 400w, images/portfolio/mat_4-800.webp 800w, images/portfolio/mat_4-1200.webp 1200w, images/portfolio/mat_4-1600.webp 1600w' }, jpg: 'images/portfolio/mat_4.jpg' },
    // { name: 'mat_5', avif: { set: 'images/portfolio/mat_5-400.avif 400w, images/portfolio/mat_5-800.avif 800w, images/portfolio/mat_5-1200.avif 1200w, images/portfolio/mat_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_5-400.webp 400w, images/portfolio/mat_5-800.webp 800w, images/portfolio/mat_5-1200.webp 1200w, images/portfolio/mat_5-1600.webp 1600w' }, jpg: 'images/portfolio/mat_5.jpg' },
    // { name: 'sen_1', avif: { set: 'images/portfolio/sen_1-400.avif 400w, images/portfolio/sen_1-800.avif 800w, images/portfolio/sen_1-1200.avif 1200w, images/portfolio/sen_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_1-400.webp 400w, images/portfolio/sen_1-800.webp 800w, images/portfolio/sen_1-1200.webp 1200w, images/portfolio/sen_1-1600.webp 1600w' }, jpg: 'images/portfolio/sen_1.jpg' },
    // { name: 'sen_2', avif: { set: 'images/portfolio/sen_2-400.avif 400w, images/portfolio/sen_2-800.avif 800w, images/portfolio/sen_2-1200.avif 1200w, images/portfolio/sen_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_2-400.webp 400w, images/portfolio/sen_2-800.webp 800w, images/portfolio/sen_2-1200.webp 1200w, images/portfolio/sen_2-1600.webp 1600w' }, jpg: 'images/portfolio/sen_2.jpg' },
    // { name: 'sen_3', avif: { set: 'images/portfolio/sen_3-400.avif 400w, images/portfolio/sen_3-800.avif 800w, images/portfolio/sen_3-1200.avif 1200w, images/portfolio/sen_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_3-400.webp 400w, images/portfolio/sen_3-800.webp 800w, images/portfolio/sen_3-1200.webp 1200w, images/portfolio/sen_3-1600.webp 1600w' }, jpg: 'images/portfolio/sen_3.jpg' },
    // { name: 'sen_4', avif: { set: 'images/portfolio/sen_4-400.avif 400w, images/portfolio/sen_4-800.avif 800w, images/portfolio/sen_4-1200.avif 1200w, images/portfolio/sen_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_4-400.webp 400w, images/portfolio/sen_4-800.webp 800w, images/portfolio/sen_4-1200.webp 1200w, images/portfolio/sen_4-1600.webp 1600w' }, jpg: 'images/portfolio/sen_4.jpg' },
    // { name: 'sen_5', avif: { set: 'images/portfolio/sen_5-400.avif 400w, images/portfolio/sen_5-800.avif 800w, images/portfolio/sen_5-1200.avif 1200w, images/portfolio/sen_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_5-400.webp 400w, images/portfolio/sen_5-800.webp 800w, images/portfolio/sen_5-1200.webp 1200w, images/portfolio/sen_5-1600.webp 1600w' }, jpg: 'images/portfolio/sen_5.jpg' },
]


const Home = () => {

  return (
    <>
      <Grid container padding={0} rowSpacing={10}>
        <Grid size={12}>
          <Box>
            <Carousel slides={slides.sort(() => Math.random() - 0.5)} />
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
          sx={{ backgroundColor: 'info.main', paddingY: -5 }}
        >
          <Grid size={{ xs: 10}} offset={{ xs: 1 }}>
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
                      objectFit: 'cover',
                      width: '100%',
                      height: 'auto',
                      minHeight: '300px'
                    }}
                    alt={brookeImage.name}
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
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3,  lg: 0 }}>
          <Card>
            <CardMedia sx={{ width: "100%", height: "auto" }}>
              <picture>
                  <source
                    type="image/avif"
                    srcSet={graduationImage.avif.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={graduationImage.webp.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={graduationImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={graduationImage.name}
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
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3,  lg: 0 }}>
          <Card>
            <CardMedia sx={{ width: "100%", height: "auto" }}>
              <picture>
                  <source
                    type="image/avif"
                    srcSet={engageImage.avif.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={engageImage.webp.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={engageImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={engageImage.name}
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
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3,  lg: 0 }}>
          <Card>
            <CardMedia sx={{ width: "100%", height: "auto" }}>
              <picture>
                  <source
                    type="image/avif"
                    srcSet={maternityImage.avif.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={maternityImage.webp.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={maternityImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={maternityImage.name}
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
        </Grid>
        <Grid size={{ xs: 10, sm: 6, lg: 3 }} offset={{ xs: 1, sm: 3, lg: 0 }}>
          <Card>
            <CardMedia sx={{ width: "100%", height: "auto" }}>
              <picture>
                  <source
                    type="image/avif"
                    srcSet={familyImage.avif.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={familyImage.webp.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={familyImage.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={familyImage.name}
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
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

export const metadata = {
  title: themeConfig.appDescription,
  description: themeConfig.appDescription,
};
