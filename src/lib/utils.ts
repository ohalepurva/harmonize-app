import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToCamelCase = (label: string) => {
  return label
    .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (match, group1) => group1.toLowerCase());
};
