import {
  Cormorant_Unicase,
  Cormorant_Garamond,
  Cormorant_Infant
} from "next/font/google";

const logo = Cormorant_Unicase({
  weight: ["300","400","500","600","700"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-logo",
});

const header = Cormorant_Garamond({
  weight: ["300","400","500","600","700"],
  subsets: ['latin'],
  display: "auto",
  style: ['normal'],
  variable: "--font-header"
})

const body = Cormorant_Infant({
  weight: ["300","400","500","600","700"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-body",
});

const subtitle = Cormorant_Infant({
  weight: ["300","400","500","600","700"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal", "italic"],
  variable: "--font-subtitle",
});

const fonts = {
  logo,
  header,
  body,
  subtitle,
};

export default fonts;
