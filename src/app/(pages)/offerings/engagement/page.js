import themeConfig from "@/configs/themeConfig";
import { Grid } from "@mui/material";
import Engagement from "./Engagement";
import Proposal from "./Proposal";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4} spacing={4}>
      <Engagement />
      <Proposal />
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Engagement Portraits | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
