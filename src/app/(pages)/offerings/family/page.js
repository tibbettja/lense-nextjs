import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import MiniFamily from "./MiniFamily";
import OneYearPortraits from "./OneYearPortraits";
import Family from "./Family";
import ExtendedFamily from "./ExtendedFamily";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <MiniFamily />
      <Family />
      <ExtendedFamily />
      <OneYearPortraits />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Family Portraits | ${themeConfig.appName}`,
  description: themeConfig.description,
};
