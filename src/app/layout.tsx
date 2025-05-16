
import {  Inter, Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner";
import "@neynar/react/dist/style.css";
import Head from "next/head";
import { MiniKitContextProvider } from "@/providers/MiniKitContextProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const generateMetadata = (): Metadata => {
  return {
    title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    description: `${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
    other: {
      "fc:frame": JSON.stringify({
        version: process.env.NEXT_PUBLIC_VERSION,
        imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
        aspectRatio: '1:1',
        button: {
          title: `Tokenize My Profile`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
            splashBackgroundColor: `#${process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR}`,
          },
        },
      }),
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`bg-[#1a1a2e] ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <MiniKitContextProvider>
          <SpeedInsights />
            {children}
          <Toaster />
        </MiniKitContextProvider>
      </body>
    </html>
  );
}
