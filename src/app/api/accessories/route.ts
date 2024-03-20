/* eslint-disable import/extensions */

import prisma from '../../utils/db';

export async function GET() {
  const accessories = await prisma.accessories.findMany();

  return Response.json(accessories);
}
