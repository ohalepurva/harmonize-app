import { generateRandomEnquiries } from "@/lib/utils";

const useGetEnquiryDetails = () => {
  const fetchEnquiries = async ({ pageNumber = 1 }) => {
    try {
      const response = await fetch(
        `api/enquiry/new?page=${pageNumber}&pageSize=4`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("failed to fetch users list", error);
    }
  };

  const fetchCallbacksEnquiries = async ({ pageNumber = 1 }) => {
    try {
      const response = await fetch(
        `api/enquiry/callback?page=${pageNumber}&pageSize=4`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("failed to fetch users list", error);
    }
  };

  // const createEnquiry = async () => {
  //   // await fetch("/api/enquiry", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify([
  //   //     {
  //   //       email: "aarav.sharma@example.com",
  //   //       first_name: "Aarav",
  //   //       last_name: "Sharma",
  //   //       phone_primary: "9876543210",
  //   //       phone_secondary: "9123456780",
  //   //       gender: "Male",
  //   //       status: "fresh",
  //   //       dob: "1998-01-15",
  //   //       created_at: new Date("2025-04-21T23:56:06.514Z"),
  //   //       referred_by: "Sneha Patel",
  //   //       course_name: "Drums",
  //   //     },
  //   //     {
  //   //       email: "meera.iyer@example.com",
  //   //       first_name: "Meera",
  //   //       last_name: "Iyer",
  //   //       phone_primary: "9812345678",
  //   //       phone_secondary: "9887766554",
  //   //       gender: "Female",
  //   //       status: "demoTaken",
  //   //       dob: "1995-05-23",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Vocal",
  //   //     },
  //   //     {
  //   //       email: "rahul.verma@example.com",
  //   //       first_name: "Rahul",
  //   //       last_name: "Verma",
  //   //       phone_primary: "9898989898",
  //   //       phone_secondary: "9777666555",
  //   //       gender: "Male",
  //   //       status: "converted",
  //   //       dob: "1990-11-11",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Piano",
  //   //     },
  //   //     {
  //   //       email: "sneha.patel@example.com",
  //   //       first_name: "Sneha",
  //   //       last_name: "Patel",
  //   //       phone_primary: "9345678923",
  //   //       phone_secondary: "9223344556",
  //   //       gender: "Female",
  //   //       status: "secondCall",
  //   //       dob: "2000-03-19",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       referred_by: "Sneha Patel",
  //   //       course_name: "Drums",
  //   //     },
  //   //     {
  //   //       email: "dev.kumar@example.com",
  //   //       first_name: "Dev",
  //   //       last_name: "Kumar",
  //   //       phone_primary: "9765432187",
  //   //       phone_secondary: "9445566778",
  //   //       gender: "Male",
  //   //       status: "notInterested",
  //   //       dob: "1985-12-05",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Vocal",
  //   //     },
  //   //     {
  //   //       email: "ananya.singh@example.com",
  //   //       first_name: "Ananya",
  //   //       last_name: "Singh",
  //   //       phone_primary: "9321009834",
  //   //       phone_secondary: "9080706050",
  //   //       gender: "Female",
  //   //       status: "visited",
  //   //       dob: "1999-07-30",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Vocal",
  //   //     },
  //   //     {
  //   //       email: "kabir.desai@example.com",
  //   //       first_name: "Kabir",
  //   //       last_name: "Desai",
  //   //       phone_primary: "9988776655",
  //   //       phone_secondary: "9111222333",
  //   //       gender: "Male",
  //   //       status: "secondCall",
  //   //       dob: "1993-04-17",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Vocal",
  //   //     },
  //   //     {
  //   //       email: "riya.kapoor@example.com",
  //   //       first_name: "Riya",
  //   //       last_name: "Kapoor",
  //   //       phone_primary: "9876078945",
  //   //       phone_secondary: "9362758493",
  //   //       gender: "Female",
  //   //       status: "demoScheduled",
  //   //       dob: "1997-06-12",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       referred_by: "Sneha Patel",
  //   //       course_name: "Drums",
  //   //     },
  //   //     {
  //   //       email: "arjun.rao@example.com",
  //   //       first_name: "Arjun",
  //   //       last_name: "Rao",
  //   //       phone_primary: "9012345678",
  //   //       phone_secondary: "9123456700",
  //   //       gender: "Male",
  //   //       status: "thirdCall",
  //   //       dob: "1991-09-09",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       course_name: "Piano",
  //   //     },
  //   //     {
  //   //       email: "tanvi.joshi@example.com",
  //   //       first_name: "Tanvi",
  //   //       last_name: "Joshi",
  //   //       phone_primary: "9123981239",
  //   //       phone_secondary: "9823948123",
  //   //       gender: "Female",
  //   //       status: "fresh",
  //   //       dob: "2002-10-21",
  //   //       created_at: new Date("2025-04-22T00:16:46.122Z"),
  //   //       referred_by: "Sneha Patel",
  //   //       course_name: "Drums",
  //   //     },
  //   //   ]),
  //   // });

  //   const enquiries = generateRandomEnquiries(50);

  //   // POST to API or insert using Prisma:
  //   await fetch("/api/enquiry", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(enquiries),
  //   });
  // };

  const fetchAllLeadActions = async (enquiryId, setEnquiryActivityLogs) => {
    try {
      const response = await fetch(`api/enquiry/${enquiryId}`);
      const data = await response.json();
      setEnquiryActivityLogs(data);
    } catch (error) {
      console.error("failed to fetch users list", error);
    }
  };
  return { fetchAllLeadActions, fetchEnquiries, fetchCallbacksEnquiries };
};

export default useGetEnquiryDetails;
