import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import Footer from "@/components/ui/footer";
import Providers from "./providers";
import ToasterContext from "@/context/toaster-context";

const clash_grotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashGrotesk-Extralight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/ClashGrotesk-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashGrotesk-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-clash_grotesk",
});

export const metadata: Metadata = {
  title: "Flowcart",
  description: "eccomerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${clash_grotesk.variable} overflow-x-hidden bg-neutral-100 font-sans`}
        >
          <Providers>
            <ToasterContext />
            <MainNavigation />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
