
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import AnimatedCursor from "react-animated-cursor";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import ProviderChakra from "./_components/ChakraProvider/ChakraProvider";
import Footer from "./_components/Footer";
import Scene1 from "./_components/ParticleCursors/Scene1";
import Scene2 from "./_components/ParticleCursors/Scene2";
import { HeaderVisibilityProvider } from "@/context/HeaderVisibilityProvider ";
import { extendTheme } from '@chakra-ui/react';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Top USA agency Miloady Designs Provides Expert Logo Design Web Development Social Media Marketing SEO and Mobile App Solutions",
  description: "Top USA agency Miloady Designs Provides Expert Logo Design Web Development Social Media Marketing SEO and Mobile App Solutions",
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <HeaderVisibilityProvider>
          <Scene2>
            <ProviderChakra>
              <Header />
              {children}
            </ProviderChakra>
          </Scene2>
        </HeaderVisibilityProvider>
      </body>
    </html>

  );
}
