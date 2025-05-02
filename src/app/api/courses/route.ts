import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const course = await request.json();
    const created = await prisma?.courses.create({
      data: course,
      //   skipDuplicates: true,
    });
    return new Response(
      JSON.stringify({ message: "Enquiries created", count: created?.count }),
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
