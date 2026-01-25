import BaseLayout from "@/@core/layouts/BaseLayout";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ThemeComponent from "@/@core/theme/ThemeComponent";

import fonts from "@/@core/theme/fonts";

import themeConfig from "@/configs/themeConfig";

const initialThemeSettings = {
  themeColor: "primary",
  mode: "light",
  contentWidth: 800,
};

const ServerApp = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "B. Tibbett Photography",
              "alternateName": "Brooke Tibbett Photography",
              "url": "https://btibbettphotography.com",
              "@id": "https://btibbettphotography.com",
              "description": "B. Tibbett Photography captures the joy and comfort of the Lake Norman area through intimate birth and family photography.",
              "logo": "https://btibbettphotography.com/images/logo.png",
              "image": [
                "https://btibbettphotography.com/images/slider/slide_1-800.webp",
                "https://btibbettphotography.com/images/slider/slide_2-800.webp",
                "https://btibbettphotography.com/images/slider/slide_3-800.webp",
                "https://btibbettphotography.com/images/slider/slide_4-800.webp",
                "https://btibbettphotography.com/images/slider/slide_5-800.webp"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mooresville",
                "addressRegion": "NC",
                "postalCode": "28115"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.67438216754764,
                  "longitude": -80.8564488652242
                },
                "geoRadius": "50 mi"
              },
              "sameAs": [
                "https://www.instagram.com/btibbettphotography/",
                "https://www.facebook.com/profile.php?id=61584634042120"
              ],
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Senior's Photography",
                      "description": "Personal photography session aimed to capture the pivotal moment of graduation."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Photography",
                      "description": "Professional photography session which will photograph the love and intimacy of your family."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Birth Photography",
                      "description": "Life-changing moments captured during your child's delivery."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maternity Photography",
                      "description": "Capture the beautiful moments of maternity with this guided photography session."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Couple's Photography",
                      "description": "Photograph an intimate proposal or capture the love of one another through this session."
                    }
                  }
                ]
              }
            }
          `,
          }}
        />
      </head>
      <body className={fonts.body.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeComponent settings={initialThemeSettings}>
            <BaseLayout>{children}</BaseLayout>
          </ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default ServerApp;

export const metadata = {
  title: themeConfig.appDescription,
  description: themeConfig.appDescription,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f2f6" },
    { media: "(prefers-color-scheme: dark)", color: "#000405" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
