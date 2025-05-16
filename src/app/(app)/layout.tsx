
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner";
import "@neynar/react/dist/style.css";
import Providers from "@/providers/providers";
import { AuthProvider } from "@/providers/AuthProvider";


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
          title: `Trade Tokenized Profile`,
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
    <Providers>
        <AuthProvider>
            <SpeedInsights />
            {children}
            <Toaster />
        </AuthProvider>
    </Providers>
  );
}
