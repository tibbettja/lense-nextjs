"use client";

import * as React from "react";

import { Box, styled, Chip } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Head from "next/head";
import AutoScroll from "embla-carousel-auto-scroll";

const Embla = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  position: "relative",
}));

const EmblaContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginLeft: "-10px",
}));

const EmblaSlide = styled(Box)(({ theme }) => ({
  minWidth: 0,
}));

const InnerEmblaSlide = styled("img")(({ theme }) => ({
  height: "50vh",
  objectFit: "contain",
  paddingLeft: "10px",
  borderRadius: '2px'
}));

const EmblaControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "5%",
  left: "calc(50% - 47.5px)",
  backgroundColor: 'rgba(0,0,0,0.33)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  padding: '8px',
  borderRadius: '13px'
}));

const EmblaDots = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
}));

const DotButton = styled(Chip)(({ theme }) => ({
  height: "1em",
  width: "1em",
}));

const CarouselOptimized = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    // Autoplay({ delay: 5000 }),
    // Fade()
    AutoScroll({ startDelay: 500, speed: 1, '(min-width: 768px)': { speed: 2 } }),
  ]);

  const onDotButtonClick = React.useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = React.useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide) => (
            <EmblaSlide key={slide.name} style={{ flex: `0 0 auto` }}>
              <picture>
                <source
                  type="image/avif"
                  srcSet={slide.avif.set}
                  // sizes="(max-width: 600px) 90v, 800px"
                />
                <source
                  type="image/webp"
                  srcSet={slide.webp.set}
                  // sizes="(max-width: 600px) 90v, 800px"
                />
                <InnerEmblaSlide
                  src={slide.jpg}
                  alt={slide.name}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </EmblaSlide>
          ))}
        </EmblaContainer>
        <EmblaControls>
          <EmblaDots>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                color={index === selectedIndex ? "bright" : "gray"}
                sx={{
                  border:
                    index !== selectedIndex ? "solid 1px white" : undefined,
                }}
              />
            ))}
          </EmblaDots>
        </EmblaControls>
      </Embla>
    </>
  );
};

export default CarouselOptimized;
