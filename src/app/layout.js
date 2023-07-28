import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Listen to your favorite music without any ads with spotify ad blocker",
  description:
    "Enjoy a vast library of music, podcasts, and other audio content with Spotify. Download the Spotify ad blocker for Google Chrome to block ads and enjoy uninterrupted listening",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.spotifyadblocker.co/" />

        <meta property="og:url" content="https://www.spotifyadblocker.co/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Listen to your favorite music without any ads with spotify ad blocker"
        />
        <meta
          property="og:description"
          content="Enjoy a vast library of music, podcasts, and other audio content with Spotify. Download the Spotify ad blocker for Google Chrome to block ads and enjoy uninterrupted listening"
        />
        <meta
          property="og:image"
          content="https://www.spotifyadblocker.co/favicon.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="Listen to your favorite music without any ads with spotify ad blocker"
        />
        <meta
          property="twitter:url"
          content="https://www.spotifyadblocker.co/"
        />
        <meta
          name="twitter:title"
          content="Listen to your favorite music without any ads with spotify ad blocker"
        />
        <meta
          name="twitter:description"
          content="Enjoy a vast library of music, podcasts, and other audio content with Spotify. Download the Spotify ad blocker for Google Chrome to block ads and enjoy uninterrupted listening"
        />
        <meta
          name="twitter:image"
          content="https://www.spotifyadblocker.co/favicon.png"
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
