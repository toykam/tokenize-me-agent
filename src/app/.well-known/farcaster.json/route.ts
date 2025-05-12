import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: process.env.FARCASTER_HEADER,
      payload: process.env.FARCASTER_PAYLOAD,
      signature: process.env.FARCASTER_SIGNATURE,
    },
    frame: {
      "version": "1",
      "name": process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      "iconUrl": process.env.NEXT_PUBLIC_ICON_URL,
      "homeUrl": process.env.NEXT_PUBLIC_URL,
      "imageUrl": process.env.NEXT_PUBLIC_ICON_URL,
      "buttonTitle": "Start Tokenization",
      "splashImageUrl": process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
      "splashBackgroundColor": `#${process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR}`,
      "screenshotUrls": [
          process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
          process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
          process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL
      ],
      "primaryCategory": "social",
      "tags": [
          "rewards",
          "leaderboard",
          "tokenization",
          "earn",
          "social"
      ],
      "heroImageUrl": process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
      "tagline": "Tokenize your profile",
      "ogTitle": process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      "ogDescription": "Tokenize your social account and earn from trading fees.",
      "ogImageUrl": process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
      "webhookUrl": process.env.NOTIFICATION_URL
    },
  };

  return new NextResponse(JSON.stringify(manifest), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}