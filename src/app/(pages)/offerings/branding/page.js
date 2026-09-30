import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Branding from "./Branding";
import Headshots from "./Headshots";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Branding />
      <Headshots />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Commercial & Branding Photography | ${themeConfig.appName}`,
  description: themeConfig.description,
};
