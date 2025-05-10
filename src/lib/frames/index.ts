export const initialFrame = {
    buttons: [
      {
        label: "View Tokens",
        action: "view-tokens",
      }
    ],
    image: {
      src: `${process.env.NEXT_PUBLIC_URL}/splash-image.jpg`,
      aspectRatio: "1:1",
    },
    input: {
      text: "Enter email or wallet address",
    },
    postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
  };
