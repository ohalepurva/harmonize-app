import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToCamelCase = (label: string) => {
  return label
    ?.replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
    ?.replace(/\s+/g, "")
    ?.replace(/^(.)/, (match, group1) => group1.toLowerCase());
};

export const formatDateTime = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export function formatDateToDDMonthYYYY(isoString: string) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
