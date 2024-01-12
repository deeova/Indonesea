import "@/styles/globals.css";
import type {AppProps} from "next/app";
import myFont from "@next/font/local";

const font2B = myFont({
  src: [
    {
      path: "../public/fonts/SinhalaMN-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-font3",
});

const font2 = myFont({
  src: [
    {
      path: "../public/fonts/Angelle-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-font2",
});

const font1 = myFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-font1",
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${font2B.variable} ${font2.variable} ${font1.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
