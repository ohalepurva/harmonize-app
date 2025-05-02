import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();
export async function GET(
  request: NextRequest,
  { params }: { params: { enquiryId: string } }
) {
  const enquiryId = parseInt(params.enquiryId);

  if (isNaN(enquiryId)) {
    return new Response(JSON.stringify({ error: "Invalid enquiry ID" }), {
      status: 400,
    });
  }
  const logs = await prisma.lead_activity_logs.findMany({
    where: { id: enquiryId },
  });

  return new Response(JSON.stringify(logs), {
    status: 200,
  });
}
