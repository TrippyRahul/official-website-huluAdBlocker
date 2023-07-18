import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Ad Blocker",
  description:
    "Listen to your favorite music without any ads with spotify ad blocker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.spotifyadblocker.net/" />

        <meta property="og:url" content="https://www.spotifyadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spotify Ad Blocker" />
        <meta
          property="og:description"
          content="Listen to your favorite music without any ads with spotify ad blocker"
        />
        <meta
          property="og:image"
          content="https://www.spotifyadblocker.net/favicon.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="spotifyadblocker.net" />
        <meta
          property="twitter:url"
          content="https://www.spotifyadblocker.net/"
        />
        <meta name="twitter:title" content="Spotify Ad Blocker" />
        <meta
          name="twitter:description"
          content="Listen to your favorite music without any ads with spotify ad blocker"
        />
        <meta
          name="twitter:image"
          content="https://www.spotifyadblocker.net/favicon.svg"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
