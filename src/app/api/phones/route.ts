/* eslint-disable import/extensions */

import { NextRequest } from 'next/server';
import prisma from '../../utils/db';

export async function GET() {
  const phones = await prisma.phones.findMany();

  return Response.json(phones);
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const data = JSON.parse(body);

  await prisma.phones.create({
    data,
  });

  return Response.json({ mes: 'Phone created' });
}
