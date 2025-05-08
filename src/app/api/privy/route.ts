import { NextResponse } from 'next/server';

export async function POST(
  req: Request
) {

  try {
    const info = await req.json();
    console.log(info);
   
    return NextResponse.json({ status: 'ok' });

  } catch (error: any) {
    console.error("Error fetching mentions:", error.rateLimit);
    if (error instanceof Error) {
        console.error("Error details:", error);
        // Check if it's the specific initialization error from the credentials check
        if (error.message.includes("Missing Twitter API credentials")) {
             return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
        }
    }
    // Generic error for other issues
    return NextResponse.json({ status: 'error', message: 'Failed to fetch mentions.' }, { status: 500 });
  }
}