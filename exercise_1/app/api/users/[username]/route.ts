
type UserParams = {
  params: Promise<{ username: string }>;
};

export async function GET(_req: Request, { params }: UserParams) {

  const { username } = await params;

  return Response.json({ username });
}
