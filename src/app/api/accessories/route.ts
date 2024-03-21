/* eslint-disable import/extensions */

import { NextRequest } from 'next/server';
import prisma from '../../utils/db';

export async function GET() {
  const accessories = await prisma.accessories.findMany();

  return Response.json(accessories);
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const data = JSON.parse(body);

  await prisma.accessories.create({
    data,
  });

  return Response.json({ mes: 'Accessory created' });
}
