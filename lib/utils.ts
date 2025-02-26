import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes properly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Mock function to connect to the database.
 * Replace this with your actual database connection logic.
 */
export async function connectToDatabase() {
  return {
    db: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      collection: (name: string) => ({
        find: () => ({ toArray: async () => [] as unknown[] }),
        findOne: async () => null,
        insertOne: async () => ({ insertedId: "mock-id" }),
        updateOne: async () => ({ modifiedCount: 1 }),
      }),
    },
    client: {
      close: async () => {},
    },
  };
}

/**
 * Formats a given date into Russian locale (e.g., "1 января 2025 г.").
 * @param date - The date to format
 * @returns A formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
