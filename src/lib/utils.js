import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// THIS IS THE MISSING PIECE CAUSING THE ERROR:
export const createPageUrl = (pageName) => {
  if (!pageName || pageName === 'Home') return '/';
  return `/${pageName.toLowerCase()}`;
};

export const isIframe = window.self !== window.top;