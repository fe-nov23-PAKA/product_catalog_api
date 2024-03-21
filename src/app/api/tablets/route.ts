/* eslint-disable import/extensions */

import { NextRequest } from 'next/server';
import prisma from '../../utils/db';

export async function GET() {
  const tablets = await prisma.tablets.findMany();

  return Response.json(tablets);
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const data = JSON.parse(body);

  await prisma.tablets.create({
    data,
  });

  return Response.json({ mes: 'Tablet created' });
}
