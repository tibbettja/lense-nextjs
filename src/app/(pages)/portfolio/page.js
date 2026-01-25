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

const images = [
    { name: 'chd_1', avif: { set: 'images/portfolio/chd_1-400.avif 400w, images/portfolio/chd_1-800.avif 800w, images/portfolio/chd_1-1200.avif 1200w, images/portfolio/chd_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/chd_1-400.webp 400w, images/portfolio/chd_1-800.webp 800w, images/portfolio/chd_1-1200.webp 1200w, images/portfolio/chd_1-1600.webp 1600w' }, jpg: 'images/portfolio/chd_1.jpg' },
    { name: 'chd_2', avif: { set: 'images/portfolio/chd_2-400.avif 400w, images/portfolio/chd_2-800.avif 800w, images/portfolio/chd_2-1200.avif 1200w, images/portfolio/chd_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/chd_2-400.webp 400w, images/portfolio/chd_2-800.webp 800w, images/portfolio/chd_2-1200.webp 1200w, images/portfolio/chd_2-1600.webp 1600w' }, jpg: 'images/portfolio/chd_2.jpg' },
    { name: 'chd_3', avif: { set: 'images/portfolio/chd_3-400.avif 400w, images/portfolio/chd_3-800.avif 800w, images/portfolio/chd_3-1200.avif 1200w, images/portfolio/chd_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/chd_3-400.webp 400w, images/portfolio/chd_3-800.webp 800w, images/portfolio/chd_3-1200.webp 1200w, images/portfolio/chd_3-1600.webp 1600w' }, jpg: 'images/portfolio/chd_3.jpg' },
    { name: 'chd_4', avif: { set: 'images/portfolio/chd_4-400.avif 400w, images/portfolio/chd_4-800.avif 800w, images/portfolio/chd_4-1200.avif 1200w, images/portfolio/chd_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/chd_4-400.webp 400w, images/portfolio/chd_4-800.webp 800w, images/portfolio/chd_4-1200.webp 1200w, images/portfolio/chd_4-1600.webp 1600w' }, jpg: 'images/portfolio/chd_4.jpg' },
    { name: 'chd_5', avif: { set: 'images/portfolio/chd_5-400.avif 400w, images/portfolio/chd_5-800.avif 800w, images/portfolio/chd_5-1200.avif 1200w, images/portfolio/chd_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/chd_5-400.webp 400w, images/portfolio/chd_5-800.webp 800w, images/portfolio/chd_5-1200.webp 1200w, images/portfolio/chd_5-1600.webp 1600w' }, jpg: 'images/portfolio/chd_5.jpg' },
    { name: 'eng_1', avif: { set: 'images/portfolio/eng_1-400.avif 400w, images/portfolio/eng_1-800.avif 800w, images/portfolio/eng_1-1200.avif 1200w, images/portfolio/eng_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_1-400.webp 400w, images/portfolio/eng_1-800.webp 800w, images/portfolio/eng_1-1200.webp 1200w, images/portfolio/eng_1-1600.webp 1600w' }, jpg: 'images/portfolio/eng_1.jpg' },
    { name: 'eng_2', avif: { set: 'images/portfolio/eng_2-400.avif 400w, images/portfolio/eng_2-800.avif 800w, images/portfolio/eng_2-1200.avif 1200w, images/portfolio/eng_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_2-400.webp 400w, images/portfolio/eng_2-800.webp 800w, images/portfolio/eng_2-1200.webp 1200w, images/portfolio/eng_2-1600.webp 1600w' }, jpg: 'images/portfolio/eng_2.jpg' },
    { name: 'eng_3', avif: { set: 'images/portfolio/eng_3-400.avif 400w, images/portfolio/eng_3-800.avif 800w, images/portfolio/eng_3-1200.avif 1200w, images/portfolio/eng_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_3-400.webp 400w, images/portfolio/eng_3-800.webp 800w, images/portfolio/eng_3-1200.webp 1200w, images/portfolio/eng_3-1600.webp 1600w' }, jpg: 'images/portfolio/eng_3.jpg' },
    { name: 'eng_4', avif: { set: 'images/portfolio/eng_4-400.avif 400w, images/portfolio/eng_4-800.avif 800w, images/portfolio/eng_4-1200.avif 1200w, images/portfolio/eng_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_4-400.webp 400w, images/portfolio/eng_4-800.webp 800w, images/portfolio/eng_4-1200.webp 1200w, images/portfolio/eng_4-1600.webp 1600w' }, jpg: 'images/portfolio/eng_4.jpg' },
    { name: 'eng_5', avif: { set: 'images/portfolio/eng_5-400.avif 400w, images/portfolio/eng_5-800.avif 800w, images/portfolio/eng_5-1200.avif 1200w, images/portfolio/eng_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_5-400.webp 400w, images/portfolio/eng_5-800.webp 800w, images/portfolio/eng_5-1200.webp 1200w, images/portfolio/eng_5-1600.webp 1600w' }, jpg: 'images/portfolio/eng_5.jpg' },
    { name: 'eng_6', avif: { set: 'images/portfolio/eng_6-400.avif 400w, images/portfolio/eng_6-800.avif 800w, images/portfolio/eng_6-1200.avif 1200w, images/portfolio/eng_6-1600.avif 1600w' }, webp: { set: 'images/portfolio/eng_6-400.webp 400w, images/portfolio/eng_6-800.webp 800w, images/portfolio/eng_6-1200.webp 1200w, images/portfolio/eng_6-1600.webp 1600w' }, jpg: 'images/portfolio/eng_6.jpg' },
    { name: 'fam_1', avif: { set: 'images/portfolio/fam_1-400.avif 400w, images/portfolio/fam_1-800.avif 800w, images/portfolio/fam_1-1200.avif 1200w, images/portfolio/fam_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_1-400.webp 400w, images/portfolio/fam_1-800.webp 800w, images/portfolio/fam_1-1200.webp 1200w, images/portfolio/fam_1-1600.webp 1600w' }, jpg: 'images/portfolio/fam_1.jpg' },
    { name: 'fam_2', avif: { set: 'images/portfolio/fam_2-400.avif 400w, images/portfolio/fam_2-800.avif 800w, images/portfolio/fam_2-1200.avif 1200w, images/portfolio/fam_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_2-400.webp 400w, images/portfolio/fam_2-800.webp 800w, images/portfolio/fam_2-1200.webp 1200w, images/portfolio/fam_2-1600.webp 1600w' }, jpg: 'images/portfolio/fam_2.jpg' },
    { name: 'fam_3', avif: { set: 'images/portfolio/fam_3-400.avif 400w, images/portfolio/fam_3-800.avif 800w, images/portfolio/fam_3-1200.avif 1200w, images/portfolio/fam_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_3-400.webp 400w, images/portfolio/fam_3-800.webp 800w, images/portfolio/fam_3-1200.webp 1200w, images/portfolio/fam_3-1600.webp 1600w' }, jpg: 'images/portfolio/fam_3.jpg' },
    { name: 'fam_4', avif: { set: 'images/portfolio/fam_4-400.avif 400w, images/portfolio/fam_4-800.avif 800w, images/portfolio/fam_4-1200.avif 1200w, images/portfolio/fam_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/fam_4-400.webp 400w, images/portfolio/fam_4-800.webp 800w, images/portfolio/fam_4-1200.webp 1200w, images/portfolio/fam_4-1600.webp 1600w' }, jpg: 'images/portfolio/fam_4.jpg' },
    { name: 'mat_1', avif: { set: 'images/portfolio/mat_1-400.avif 400w, images/portfolio/mat_1-800.avif 800w, images/portfolio/mat_1-1200.avif 1200w, images/portfolio/mat_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_1-400.webp 400w, images/portfolio/mat_1-800.webp 800w, images/portfolio/mat_1-1200.webp 1200w, images/portfolio/mat_1-1600.webp 1600w' }, jpg: 'images/portfolio/mat_1.jpg' },
    { name: 'mat_2', avif: { set: 'images/portfolio/mat_2-400.avif 400w, images/portfolio/mat_2-800.avif 800w, images/portfolio/mat_2-1200.avif 1200w, images/portfolio/mat_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_2-400.webp 400w, images/portfolio/mat_2-800.webp 800w, images/portfolio/mat_2-1200.webp 1200w, images/portfolio/mat_2-1600.webp 1600w' }, jpg: 'images/portfolio/mat_2.jpg' },
    { name: 'mat_3', avif: { set: 'images/portfolio/mat_3-400.avif 400w, images/portfolio/mat_3-800.avif 800w, images/portfolio/mat_3-1200.avif 1200w, images/portfolio/mat_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_3-400.webp 400w, images/portfolio/mat_3-800.webp 800w, images/portfolio/mat_3-1200.webp 1200w, images/portfolio/mat_3-1600.webp 1600w' }, jpg: 'images/portfolio/mat_3.jpg' },
    { name: 'mat_4', avif: { set: 'images/portfolio/mat_4-400.avif 400w, images/portfolio/mat_4-800.avif 800w, images/portfolio/mat_4-1200.avif 1200w, images/portfolio/mat_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_4-400.webp 400w, images/portfolio/mat_4-800.webp 800w, images/portfolio/mat_4-1200.webp 1200w, images/portfolio/mat_4-1600.webp 1600w' }, jpg: 'images/portfolio/mat_4.jpg' },
    { name: 'mat_5', avif: { set: 'images/portfolio/mat_5-400.avif 400w, images/portfolio/mat_5-800.avif 800w, images/portfolio/mat_5-1200.avif 1200w, images/portfolio/mat_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/mat_5-400.webp 400w, images/portfolio/mat_5-800.webp 800w, images/portfolio/mat_5-1200.webp 1200w, images/portfolio/mat_5-1600.webp 1600w' }, jpg: 'images/portfolio/mat_5.jpg' },
    { name: 'sen_1', avif: { set: 'images/portfolio/sen_1-400.avif 400w, images/portfolio/sen_1-800.avif 800w, images/portfolio/sen_1-1200.avif 1200w, images/portfolio/sen_1-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_1-400.webp 400w, images/portfolio/sen_1-800.webp 800w, images/portfolio/sen_1-1200.webp 1200w, images/portfolio/sen_1-1600.webp 1600w' }, jpg: 'images/portfolio/sen_1.jpg' },
    { name: 'sen_2', avif: { set: 'images/portfolio/sen_2-400.avif 400w, images/portfolio/sen_2-800.avif 800w, images/portfolio/sen_2-1200.avif 1200w, images/portfolio/sen_2-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_2-400.webp 400w, images/portfolio/sen_2-800.webp 800w, images/portfolio/sen_2-1200.webp 1200w, images/portfolio/sen_2-1600.webp 1600w' }, jpg: 'images/portfolio/sen_2.jpg' },
    { name: 'sen_3', avif: { set: 'images/portfolio/sen_3-400.avif 400w, images/portfolio/sen_3-800.avif 800w, images/portfolio/sen_3-1200.avif 1200w, images/portfolio/sen_3-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_3-400.webp 400w, images/portfolio/sen_3-800.webp 800w, images/portfolio/sen_3-1200.webp 1200w, images/portfolio/sen_3-1600.webp 1600w' }, jpg: 'images/portfolio/sen_3.jpg' },
    { name: 'sen_4', avif: { set: 'images/portfolio/sen_4-400.avif 400w, images/portfolio/sen_4-800.avif 800w, images/portfolio/sen_4-1200.avif 1200w, images/portfolio/sen_4-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_4-400.webp 400w, images/portfolio/sen_4-800.webp 800w, images/portfolio/sen_4-1200.webp 1200w, images/portfolio/sen_4-1600.webp 1600w' }, jpg: 'images/portfolio/sen_4.jpg' },
    { name: 'sen_5', avif: { set: 'images/portfolio/sen_5-400.avif 400w, images/portfolio/sen_5-800.avif 800w, images/portfolio/sen_5-1200.avif 1200w, images/portfolio/sen_5-1600.avif 1600w' }, webp: { set: 'images/portfolio/sen_5-400.webp 400w, images/portfolio/sen_5-800.webp 800w, images/portfolio/sen_5-1200.webp 1200w, images/portfolio/sen_5-1600.webp 1600w' }, jpg: 'images/portfolio/sen_5.jpg' },
]

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
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={image.webp.set}
                    sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={image.jpg}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2px",
                    }}
                    alt={image.name}
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
  title: `Portfolio | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
