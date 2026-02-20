"use client";

import {
  Button,
  Card,
  CardContent,
  Grid,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import NextLink from "next/link";

import Photos from "@/contants";
const image = Photos.offerings.super.senior;

const PicHolder = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media(min-width: 1024px)": {
    justifyContent: "end",
  },
}));

const SuperSenior = () => {
  return (
    <Grid size={12} component={Card}>
      <CardContent component={Grid} container>
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
              <Typography variant="h3">Senior Portraits</Typography>
            </ListItem>
            <ListItem>
              <NextLink href="/offerings/seniors" title="Senior Portraits">
                <Button variant="outlined">More Info</Button>
              </NextLink>
            </ListItem>
          </Stack>
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default SuperSenior;
