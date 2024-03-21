import { NextRequest } from 'next/server';
import prisma from '../../../utils/db';
import { getId } from '../../../utils/getId';

export async function GET(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    const Accessory = await prisma.accessories.findUnique({
      where: {
        id,
      },
    });

    if (!Accessory) {
      return Response.json(
        { error: `Accessory with id ${id} not found` },
        { status: 404 },
      );
    }

    return Response.json(Accessory);
  } catch (error) {
    return Response.json(
      { error: 'Error updating accessory' },
      { status: 500 },
    );
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
    await prisma.accessories.update({
      where: {
        id,
      },
      data,
    });

    return Response.json({
      message: `Accessory with id ${id} updated successfully`,
    });
  } catch (error) {
    return Response.json(
      { error: 'Error updating accessory' },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  const id = getId(request.url);

  if (!id) {
    return Response.json({ error: 'Id parameter is missing' }, { status: 400 });
  }

  try {
    await prisma.accessories.delete({
      where: {
        id,
      },
    });

    return Response.json({
      message: `Accessory with id ${id} deleted successfully`,
    });
  } catch (error) {
    return Response.json(
      { error: 'Error updating accessory' },
      { status: 500 },
    );
  }
}
