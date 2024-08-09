"use server";

import { readFileSync } from "fs";

export async function handleVersion() {
  const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
  return packageJson;
}
