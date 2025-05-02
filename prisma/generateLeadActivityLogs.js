import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const statuses = [
  "fresh",
  "secondCall",
  "thirdCall",
  "demoScheduled",
  "demoTaken",
  "converted",
  "notInterested",
  "visited",
];

const messages = [
  "Initial enquiry received",
  "Follow-up scheduled",
  "Fee discussion done",
  "Parent meeting completed",
  "Demo attended",
  "Student not interested",
  "Booked demo",
  "Converted to student",
  "Requested callback",
];

const createdByOptions = ["Admin", "Priya Verma", "Raj Kapoor", "Sneha Patel"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate(start = new Date(), days = 10) {
  const date = new Date(start);
  date.setDate(date.getDate() + Math.floor(Math.random() * days));
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  return date;
}

async function generateLeadActivityLogs() {
  const enquiries = await prisma.enquiry.findMany();

  for (const enquiry of enquiries) {
    const logsToCreate = Math.floor(Math.random() * 5) + 2; // between 2 and 6

    const logs = Array.from({ length: logsToCreate }).map(() => ({
      enquiryId: enquiry.id,
      enquiryMessage: getRandomElement(messages),
      status: getRandomElement(statuses),
      callbackDateTime: getRandomDate(),
      createdBy: getRandomElement(createdByOptions),
    }));

    await prisma.lead_activity_logs.createMany({
      data: logs,
    });

    console.log(`Created ${logsToCreate} logs for enquiry ID ${enquiry.id}`);
  }

  console.log("All lead activity logs generated.");
}

generateLeadActivityLogs()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
