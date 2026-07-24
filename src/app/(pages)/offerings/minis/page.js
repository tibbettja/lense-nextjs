import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Valentines from "./Valentines";
import Harvest from "./Harvest";
import Christmas from "./Christmas";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Grid size={12}>
        <Harvest />
      </Grid>
      <Grid size={12}>
        <Christmas />
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Mini Sessions | ${themeConfig.appName}`,
  description: themeConfig.description,
};
