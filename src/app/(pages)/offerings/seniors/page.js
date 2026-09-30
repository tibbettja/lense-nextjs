import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import MiniSenior from "./MiniSenior";
import Senior from "./Senior";
import DeluxeSenior from "./DeluxeSenior";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <MiniSenior />
      <Senior />
      <DeluxeSenior />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Senior Portraits | ${themeConfig.appName}`,
  description: themeConfig.description,
};
