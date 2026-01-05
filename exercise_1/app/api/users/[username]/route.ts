type Params = {
    params: { username: string };
  };
  
  export async function GET(
    _req: Request,
    { params }: Params
  ) {
    const { username } = params;
  
    return Response.json({
      username,
    });
  }
  