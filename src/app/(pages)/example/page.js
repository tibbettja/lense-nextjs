import themeConfig from "@/configs/themeConfig";

import {
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
  Card
} from "@mui/material";

export default function Home() {
  return (
    <Grid
        size={{ xs: 12, lg: 10, xl: 8 }}
        offset={{ xs: 0, lg: 1, xl: 2 }}
        container
        spacing={4}
        paddingX={4}
      >
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
      <Grid size={12}>
        <Button variant="contained" color='primary'>Primary Contained</Button>
        <Button variant="contained" color='secondary'>Secondary Contained</Button>
        <Button variant="contained" color='info'>Info Contained</Button>
        <Button variant="contained" color='success'>Success Contained</Button>
        <Button variant="contained" color='attention'>Attention Contained</Button>
        <Button variant="contained" color='warning'>Warning Contained</Button>
        <Button variant="contained" color='error'>Error Contained</Button>
      </Grid>
      <Grid size={12}>
        <Button variant="outlined" color='primary'>Primary Outlined</Button>
        <Button variant="outlined" color='secondary'>Secondary Outlined</Button>
        <Button variant="outlined" color='info'>Info Outlined</Button>
        <Button variant="outlined" color='success'>Success Outlined</Button>
        <Button variant="outlined" color='attention'>Attention Outlined</Button>
        <Button variant="outlined" color='warning'>Warning Outlined</Button>
        <Button variant="outlined" color='error'>Error Outlined</Button>
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
