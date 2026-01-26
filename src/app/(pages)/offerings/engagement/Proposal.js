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

const PicHolder = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media(min-width: 1024px)": {
    justifyContent: "end",
  },
}));

const image = {
  name: "eng_prp",
  avif: {
    set: "/images/services/eng_prp-400.avif 400w, /images/services/eng_prp-800.avif 800w, /images/services/eng_prp-1200.avif 1200w, /images/services/eng_prp-1600.avif 1600w",
  },
  webp: {
    set: "/images/services/eng_prp-400.webp 400w, /images/services/eng_prp-800.webp 800w, /images/services/eng_prp-1200.webp 1200w, /images/services/eng_prp-1600.webp 1600w",
  },
  jpg: "/images/services/eng_prp.jpg",
};

const Proposal = () => {
  return (
    <Grid size={12} component={Card}>
      <CardHeader
        title="Proposal Photography"
        subheader="Capture the moment of proposal!"
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
              alt={image.name}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </PicHolder>
        <Grid size={{ xs: 12, lg: 5 }} offset={{ xs: 0, lg: 1 }}>
          <Stack>
            <ListItem>
              <Typography variant="body2">
                60 minute Session & 20 Digital Images
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Includes Consultation by Phone or Email
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">$180</Typography>
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

export default Proposal;
