import {
  Bungee,
  Oxanium,
  Righteous,
  Roboto_Serif
} from "next/font/google";

const logo = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-logo",
});

const header = Bungee({
  weight: ["400"],
  subsets: ['latin'],
  display: "auto",
  style: ['normal'],
  variable: "--font-header"
})

const body = Oxanium({
  weight: ["200","300","400","500","600","700","800"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-body",
});

const subtitle = Roboto_Serif({
  weight: ["100","200","300","400","500","600","700","800","900"],
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
