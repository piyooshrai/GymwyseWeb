import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = "USD"): string {
  const symbols: Record<string, string> = {
    USD: "$",
    GBP: "£",
    AUD: "A$",
    AED: "AED ",
  };
  const symbol = symbols[currency] || "$";
  return `${symbol}${value.toLocaleString()}`;
}

export function formatPercent(value: number): string {
  return `${value.toLocaleString()}%`;
}
