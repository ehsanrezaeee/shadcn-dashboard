import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const e2p = (s: string): string =>
  s.replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
const e2a = (s: string): string =>
  s.replace(/\d/g, (d: string) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);

export const p2e = (s: string): string =>
  s.replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
const a2e = (s: string): string =>
  s.replace(/[٠-٩]/g, (d: string) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

export const numToCardNum = (num: number) => {
  let str = num.toString();
  let output = "";

  let result = [];
  for (let i = 0; i < str.length; i += 4) {
    result.push(str.slice(i, i + 4));
  }
  output = result.join(" - ");

  output = e2p(output);
  return output;
};

export const extractNumbers = (input: string) => {
  return input.replace(/\D/g, "");
};

export const numToCardNumEn = (num: number) => {
  let str = num.toString();
  let output = "";

  let result = [];
  for (let i = 0; i < str.length; i += 4) {
    result.push(str.slice(i, i + 4));
  }
  output = result.join(" - ");
  return output;
};
