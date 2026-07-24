import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import nextConfig from "next.config.mjs";

import Photos from "@/contants";
import Masonry from "@/@core/components/Masonry";
const images = Photos.portfolio.images;

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid size={12} container>
        <Grid size={12}>
          <Masonry images={images} randomize />
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
