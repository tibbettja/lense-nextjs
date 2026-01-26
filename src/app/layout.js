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
        <meta name='viewport' content='width=device-width' />
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
                      "name": "Senior Portrait Photography",
                      "alternateName": "Senior Portrait Photographer",
                      "description": "Personal photography session aimed to capture the dedication a senior has put into their education."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Milestone Moments",
                      "alternateName": "Milestone Photographer",
                      "description": "Personal photography session aimed to capture the milestones in a child's life. Usually captured at newborn, six months, and one year."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lifestyle Newborn",
                      "alternateName": "Lifestyle Photographer",
                      "description": "Personal photography session taken at home to capture the love and intimacy of the family with their new addition"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Photography",
                      "alternateName": "Family Photographer",
                      "description": "Professional photography session which will catpure the love and intimacy of your family."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Birth Photography",
                      "alternateName": "Birth Photographer",
                      "description": "Life-changing and intimate moments captured during a mother's labor and delivery."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maternity Photography",
                      "alternateName": "Maternity Photographer",
                      "description": "Capture the beautiful moments of maternity with this guided photography session."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Photography",
                      "alternateName": "Event Photographer",
                      "description": "Photography of events such as birthday parties, gender reveals, baby showers, and elopments"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Couple's Photography",
                      "alternateName": "Couples Photographer",
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
