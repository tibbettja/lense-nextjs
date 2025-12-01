import themeConfig from "@/configs/themeConfig";

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={4}>
      <Grid size={6}>
        <Card>
          <CardHeader title="Example Card" />
        </Card>
      </Grid>
      <Grid size={6}>
        <Card>
          <CardHeader title="Example Card" subheader="with subheader" />
        </Card>
      </Grid>
      <Grid size={12}>
        <Card>
          <CardHeader title="Example Card 2" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid size={12}>
                <Typography variant="h1">Heading 1</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="h2">Heading 2</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="h3">Heading 3</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="h4">Heading 4</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="h5">Heading 5</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="h6">Heading 6</Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="body1">
                  Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1
                  Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1
                  Body 1 Body 1 Body 1 Body 1 Body 1 Body 1 Body 1{" "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="body2">
                  Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2
                  Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2
                  Body 2 Body 2 Body 2 Body 2 Body 2 Body 2 Body 2{" "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="subtitle1">
                  Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1
                  Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1
                  Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1
                  Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1{" "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="subtitle2">
                  Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2
                  Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2
                  Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2
                  Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2{" "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="caption">
                  Caption Caption Caption Caption Caption Caption Caption
                  Caption Caption Caption Caption Caption Caption Caption
                  Caption Caption Caption Caption Caption Caption Caption
                  Caption Caption Caption{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export const metadata = {
  title: themeConfig.appName,
  description: themeConfig.appDescription,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E8D8C8" },
    { media: "(prefers-color-scheme: dark)", color: "#000405" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
