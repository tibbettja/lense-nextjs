'use client'

import * as React from 'react'

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
  useTheme
} from "@mui/material";
import nextConfig from "next.config.mjs";
import themeConfig from "@/configs/themeConfig";
import 'animate.css'
import Carousel from '@/@core/components/Carousel';

const heroImages = [
  'images/children/4b313f1e2578f643ca26.jpg',
  'images/maternity/c6f9f2fbd1caf6d99b2f.jpg',
  'images/seniors/6fa16f8dbc4ddd924f89.jpg',
  'images/children/32ca3b18c95467174593.jpg',
  'images/maternity/b2594453464d28176c37.jpg',
  'images/family/3defbc8953bae59328d4.jpg'
]
const familyImage = 'images/family/421b7bc3167858e2126a.jpg'
const maternityImage = 'images/maternity/5853201f8949b5eda39c.jpg'
const graduationImage = 'images/seniors/5f9c0d7681b497d3e7f7.jpg'
const brookeImage = 'images/brooke.jpg'

const Home = () => {

  const theme = useTheme()

  return (
    <>
      <Grid container padding={0} rowSpacing={10}>
        <Grid size={12}>
          <Box>
            <Carousel images={heroImages} speed={3} />
          </Box>
        </Grid>
        <Grid size={{ xs: 10, lg: 8 }} offset={{ xs: 1, lg: 2 }}>
            <Typography variant="h4" align='center'>
              { themeConfig.appName } captures the joy and comfort of the Lake Norman area through intimate family photography.
            </Typography>
        </Grid>
        <Grid container size={12} sx={{ backgroundColor: theme.palette.info.main }}>
          <Grid size={{ xs: 10, lg: 8 }} offset={{ xs: 1, lg: 2 }}>
            <Grid container padding={0}>
              <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={brookeImage} alt='Brooke Image' style={{ maxWidth: '100%', width: 'auto', height: '80%' }} />
              </Grid>
              <Grid size={5} offset={0.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                <Typography variant='h4' fontWeight={600} align='center' color='info.contrastText'>Welcome.</Typography>
                <Typography variant='button' align='center' color='primary.light'>I'm so glad you're here!</Typography>
                <Typography variant="body2" align='center' color='info.contrastText'>
                  I believe whole-heartedly documenting your family is an investment you will never regret. 
                </Typography>
                <Typography variant="body2" align='center' color='info.contrastText'>
                  I'm Brooke Tibbett, a lifestyle photographer serving families in the greater Lake Norman area of NC.
                </Typography>
                <Typography variant="body2" align='center' color='info.contrastText'>
                  My passion rests in capturing moments of authentic connection. By gently guiding you with prompts and poses to set your family at ease, we'll create photographs that will be cherished for a lifetime.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container padding={5} rowSpacing={15} columnSpacing={10}>
        <Grid size={{ xs: 10, lg: 3}} offset={{ xs: 1, lg: 1.5}}>
          <Card>
            <CardMedia
              component="img"
              image={familyImage}
              sx={{ width: '100%', height: 'auto' }}
              alt='Family'
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">Family</Typography>
              }
              sx={{ padding: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 10, lg: 3}} offset={{ xs: 1, lg: 0 }}>
          <Card>
            <CardMedia
              component="img"
              image={graduationImage}
              sx={{ width: '100%', height: 'auto' }}
              alt='Seniors'
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">Seniors</Typography>
              }
              sx={{ padding: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 10, lg: 3}} offset={{ xs: 1, lg: 0 }}>
          <Card>
            <CardMedia
              component="img"
              image={maternityImage}
              sx={{ width: '100%', height: 'auto' }}
              alt='Maternity'
            />
            <CardHeader
              title={
                <Typography variant="h4" align="center">Maternity</Typography>
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
