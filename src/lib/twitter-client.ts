import TwitterApi from "twitter-api-v2";
import * as dotenv from "dotenv";
dotenv.config();


// console.log("Twitter API Key:", process.env.TWITTER_API_KEY);
// console.log("Twitter API Secret:", process.env.TWITTER_API_SECRET);
// console.log("Twitter Access Token:", process.env.TWITTER_ACCESS_TOKEN);
// console.log("Twitter Access Token Secret:", process.env.TWITTER_ACCESS_SECRET);
// console.log("Twitter Bearer Token:", process.env.TWITTER_BEARER_TOKEN);
// console.log("Agent User ID:", process.env.AGENT_USER_ID);   

const twClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN!,
    accessSecret: process.env.TWITTER_ACCESS_SECRET!
});


// const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN!);

export const client = twClient;
