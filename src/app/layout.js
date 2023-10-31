import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Listen to your favorite music without any ads with spotify ad blocker",
  description:
    "Discover a world of music and podcasts with Spotify. Download our ad blocker for Chrome to enjoy uninterrupted listening.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.spotifyadblocker.co/" />
        <meta
          name="google-site-verification"
          content="Z3aFOMonL3_cMNCCC6YT35q4Wmto0tAxIZD2NZkBUoI"
        />

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2VZCHWMF6M" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VZCHWMF6M');
          `,
          }}
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
