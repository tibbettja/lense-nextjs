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
  name: "bm_brt",
  avif: {
    set: "/images/services/bm_brt-400.avif 400w, /images/services/bm_brt-800.avif 800w, /images/services/bm_brt-1200.avif 1200w, /images/services/bm_brt-1600.avif 1600w",
  },
  webp: {
    set: "/images/services/bm_brt-400.webp 400w, /images/services/bm_brt-800.webp 800w, /images/services/bm_brt-1200.webp 1200w, /images/services/bm_brt-1600.webp 1600w",
  },
  jpg: "/images/services/bm_brt.jpg",
};

const Birth = () => {
  return (
    <Grid size={12} component={Card}>
      <CardHeader
        title="Birth Photography"
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
                At least 100 Edited, Digital Images in both Color and B&W
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Present for labor, birth, and one hour postpartum
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                On Call from 37 weeks until your baby is born (In the event that
                your baby arrives early, I will make best attempt to be present)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Includes Consultation by Phone or Email to Discuss Preferences
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">$1200</Typography>
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

export default Birth;
