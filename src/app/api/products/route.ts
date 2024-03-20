/* eslint-disable import/extensions */

import prisma from '../../utils/db';

export async function GET() {
  const products = await prisma.products.findMany();

  return Response.json(products);
}
