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

const offeringsImage = 'images/offerings.jpg'

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid
        size={{ xs: 12 }}
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography
            variant="h2"
            textAlign="center"
          >Pricing</Typography>
        </Grid>
        <Grid size={12} sx={{ backgroundColor: '#eae4da', display: 'flex', justifyContent: 'center' }}>
          <img src={offeringsImage} style={{ height: '100%', width: 'auto', maxWidth: '100%' }} alt='Offerings' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Pricing | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
