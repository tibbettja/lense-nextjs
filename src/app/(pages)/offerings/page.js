import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import SuperSenior from "./SuperSenior";
import SuperEngagement from "./SuperEngagement";
import SuperMaternity from "./SuperMaternity";
import SuperFamily from "./SuperFamily";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <SuperSenior />
      <SuperEngagement />
      <SuperMaternity />
      <SuperFamily />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Offerings | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
