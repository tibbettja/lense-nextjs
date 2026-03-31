import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Branding from "./Branding";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid size={12}>
        <Branding />
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Commercial & Branding Photography | ${themeConfig.appName}`,
  description: themeConfig.description,
};
