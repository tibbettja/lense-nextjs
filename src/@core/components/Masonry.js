"use client";
import * as React from "react";
import { Masonry as DefaultMasonry } from "@mui/lab";

const Masonry = ({ images, randomize }) => {
  const randomImages = React.useMemo(
    () => (randomize ? images.sort(() => Math.random() - 0.5) : images),
    [images, randomize],
  );

  return (
    <DefaultMasonry columns={{ xs: 2, lg: 4 }} spacing={2}>
      {randomImages.map((image) => (
        <picture key={image.name}>
          <source
            type="image/avif"
            srcSet={image.avif.set}
            // sizes="(max-width: 600px) 90v, 800px"
          />
          <source
            type="image/webp"
            srcSet={image.webp.set}
            // sizes="(max-width: 600px) 90v, 800px"
          />
          <img
            src={image.jpg}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "2px",
            }}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      ))}
    </DefaultMasonry>
  );
};

export default Masonry;
