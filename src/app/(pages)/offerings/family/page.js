import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Family from "./Family";
import ExtendedFamily from "./ExtendedFamily";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Family />
      <ExtendedFamily />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Family Portraits | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
