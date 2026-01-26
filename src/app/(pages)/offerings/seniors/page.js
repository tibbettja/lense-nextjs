import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Senior from "./Senior";
import ExtendedSenior from "./ExtendedSenior";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Senior />
      <ExtendedSenior />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Senior Portraits | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
