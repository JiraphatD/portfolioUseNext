// Next.js App Router API Route (server-side)
export async function GET(request) {
  try {
    const response = await fetch("http://localhost:5000/"); // your real API
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
