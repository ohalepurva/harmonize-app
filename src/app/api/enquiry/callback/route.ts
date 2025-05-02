import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = parseInt(searchParams.get("pageNumber") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const skip = (pageNumber - 1) * pageSize;

  const enquiries = await prisma.enquiry.findMany({
    skip,
    take: pageSize,
    where: { status: { not: "fresh" } },
  });
  const enquiriesCount = await prisma.enquiry.count();
  const response = { items: [...enquiries], totalRecords: enquiriesCount };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
