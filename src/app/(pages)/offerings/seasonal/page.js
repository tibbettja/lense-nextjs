import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Valentines from "./Valentines";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid size={12}>
        <Valentines />
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Seasonal Specials | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
