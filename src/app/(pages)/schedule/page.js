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

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid
        size={{ xs: 12, lg: 10, xl: 8 }}
        offset={{ xs: 0, lg: 1, xl: 2 }}
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography
            variant="h2"
            textAlign="center"
          >Schedule</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Schedule | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
