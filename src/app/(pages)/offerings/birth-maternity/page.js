import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Maternity from "./Maternity";
import Birth from "./Birth";
import Fresh48 from "./Fresh48";
import Lifestyle from "./Lifestyle";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Maternity />
      <Birth />
      <Fresh48 />
      <Lifestyle />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Birth & Maternity Portraits | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
