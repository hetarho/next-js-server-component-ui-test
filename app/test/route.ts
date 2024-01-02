import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return new NextResponse(
    JSON.stringify({
      data: "complete",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
