import { NextRequest } from 'next/server';
import prisma from '../../../utils/db';
import { getId } from '../../../utils/getId';

export async function GET(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    const tablet = await prisma.tablets.findUnique({
      where: {
        id,
      },
    });

    if (!tablet) {
      return Response.json(
        { error: `tablet with id ${id} not found` },
        { status: 404 },
      );
    }

    return Response.json(tablet);
  } catch (error) {
    return Response.json({ error: 'Error updating tablet' }, { status: 500 });
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
    await prisma.tablets.update({
      where: {
        id,
      },
      data,
    });

    return Response.json({
      message: `Tablet with id ${id} updated successfully`,
    });
  } catch (error) {
    return Response.json({ error: 'Error updating tablet' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    await prisma.tablets.delete({
      where: {
        id,
      },
    });

    return Response.json({
      message: `Tablet with id ${id} deleted successfully`,
    });
  } catch (error) {
    return Response.json({ error: 'Error updating tablet' }, { status: 500 });
  }
}
