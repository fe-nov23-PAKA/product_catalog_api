/* eslint-disable import/extensions */

import prisma from '../../utils/db';

export async function GET() {
  const tablets = await prisma.tablets.findMany();

  return Response.json(tablets);
}
