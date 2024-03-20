import { NextRequest } from 'next/server';
import prisma from '../../utils/db';

export async function PATCH(request: NextRequest) {
  const body = await request.text();
  const data = JSON.parse(body);
  const url = new URL(request.url);
  const id = url.searchParams.get('namespaceId');

  if (!id) {
    return Response.json(
      { error: 'NamespaceId parameter is missing' },
      { status: 400 },
    );
  }

  try {
    await prisma.phones.update({
      where: {
        id,
      },
      data,
    });

    return Response.json({
      message: `Phone with namespaceId ${id} updated successfully`,
    });
  } catch (error) {
    return Response.json({ error: 'Error updating phone' }, { status: 500 });
  }
}
