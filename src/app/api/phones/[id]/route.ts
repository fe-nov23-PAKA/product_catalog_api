import { NextRequest } from 'next/server';
import prisma from '../../../utils/db';
import { getId } from '../../../utils/getId';

export async function GET(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    const phone = await prisma.phones.findUnique({
      where: {
        id,
      },
    });

    if (!phone) {
      return Response.json(
        { error: `Phone with id ${id} not found` },
        { status: 404 },
      );
    }

    return Response.json(phone);
  } catch (error) {
    return Response.json({ error: 'Error updating phone' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const body = await request.text();
  const data = JSON.parse(body);
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    await prisma.phones.update({
      where: {
        id,
      },
      data,
    });

    return Response.json({
      message: `Phone with id ${id} updated successfully`,
    });
  } catch (error) {
    return Response.json({ error: 'Error updating phone' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    await prisma.phones.delete({
      where: {
        id,
      },
    });

    return Response.json({
      message: `Phone with id ${id} deleted successfully`,
    });
  } catch (error) {
    return Response.json({ error: 'Error updating phone' }, { status: 500 });
  }
}
