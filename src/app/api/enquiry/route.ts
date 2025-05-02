// harmonize-app/src/app/api/enquiry/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const enquiries = await request.json();

    if (!Array.isArray(enquiries)) {
      return new Response(
        JSON.stringify({ message: "Expected an array of enquiries" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const created = await prisma.enquiry.createMany({
      data: enquiries,
      skipDuplicates: true,
    });

    return new Response(
      JSON.stringify({ message: "Enquiries created", count: created.count }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = parseInt(searchParams.get("pageNumber") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const skip = (pageNumber - 1) * pageSize;

  const enquiries = await prisma.enquiry.findMany({
    skip,
    take: pageSize,
  });
  const enquiriesCount = await prisma.enquiry.count();
  const response = { items: [...enquiries], totalRecords: enquiriesCount };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
