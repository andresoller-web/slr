export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const qs = searchParams.toString();
  const upstreamUrl = `https://www.googletagmanager.com/gtm.js${qs ? `?${qs}` : ""}`;

const upstream = await fetch(upstreamUrl, {
  headers: {
    "User-Agent": request.headers.get("user-agent") || "Mozilla/5.0",
  },
});

const body = await upstream.text();

return new Response(body, {
  status: upstream.status,
  headers: {
    "Content-Type": upstream.headers.get("content-type") || "application/javascript; charset=utf-8",
    "Cache-Control": "public, max-age=900",
  },
});
}
