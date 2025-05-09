import { NextRequest, NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

export const middleware = async (request: NextRequest) => {
    console.log("PATH ::: ", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith('/api/warpcast')) {
    console.log('this was called here...');

    const body = await request.text();

    const sig = request.headers.get('X-Neynar-Signature');
    if (!sig) {
      console.error('Neynar signature missing from request headers');
      return NextResponse.json({ error: 'Neynar signature missing' }, { status: 400 });
    }

    const webhookSecret = process.env.NEYNAR_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('NEYNAR_WEBHOOK_SECRET not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Generate HMAC-SHA512 using CryptoJS
    const generatedSignature = CryptoJS.HmacSHA512(body, webhookSecret).toString(CryptoJS.enc.Hex);

    console.log(generatedSignature, " ::: ", sig);

    const isValid = generatedSignature === sig;
    if (!isValid) {
      console.error('Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    return NextResponse.next();
  }
  return NextResponse.next();
};