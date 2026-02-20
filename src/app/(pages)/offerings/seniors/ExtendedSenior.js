"use client";

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import Photos from "@/contants";
const image = Photos.offerings.seniors.extended;

const PicHolder = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media(min-width: 1024px)": {
    justifyContent: "end",
  },
}));

const ExtendedSenior = () => {
  return (
    <Grid size={12} component={Card}>
      <CardHeader
        title="Extended Senior Portraits"
        slotProps={{
          title: { align: "center", variant: "h3" },
          subheader: { align: "center", variant: "h6" },
        }}
      />
      <CardContent component={Grid} container>
        <Grid size={12}>
          <Divider variant="inset" />
        </Grid>
        <PicHolder size={{ xs: 12, lg: 5 }}>
          <picture key={image.name}>
            <source
              type="image/avif"
              srcSet={image.avif.set}
              sizes="(max-width: 600px) 90v, 1200px"
            />
            <source
              type="image/webp"
              srcSet={image.webp.set}
              sizes="(max-width: 600px) 90v, 1200px"
            />
            <img
              src={image.jpg}
              style={{
                width: "400px",
                height: "auto",
                borderRadius: "2px",
              }}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </PicHolder>
        <Grid size={{ xs: 12, lg: 5 }} offset={{ xs: 0, lg: 1 }}>
          <Stack>
            <ListItem>
              <Typography variant="body2">
                45 minute Session & 20 Digital Images
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Potential for outfit change
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Optional Add-On: Secondary Location (within 15 miles) for $15
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Includes Consultation by Phone or Email
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">$140</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                <Link
                  href="https://portfolio.btibbettphotography.com/contact"
                  title="Inquire Now!"
                >
                  Inquire Now!
                </Link>
              </Typography>
            </ListItem>
          </Stack>
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default ExtendedSenior;
