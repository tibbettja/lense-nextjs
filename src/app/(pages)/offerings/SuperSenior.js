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

const image = {
  name: "sen_ovw",
  avif: {
    set: "/images/services/sen_ovw-400.avif 400w, /images/services/sen_ovw-800.avif 800w, /images/services/sen_ovw-1200.avif 1200w, /images/services/sen_ovw-1600.avif 1600w",
  },
  webp: {
    set: "/images/services/sen_ovw-400.webp 400w, /images/services/sen_ovw-800.webp 800w, /images/services/sen_ovw-1200.webp 1200w, /images/services/sen_ovw-1600.webp 1600w",
  },
  jpg: "/images/services/sen_ovw.jpg",
};

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
              alt={image.name}
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
