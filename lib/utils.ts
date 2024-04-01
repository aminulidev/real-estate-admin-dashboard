import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (str?:string) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (/^[A-Z]+$/.test(str)) {
    return str.charAt(0) + str.slice(1).toLowerCase();
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
