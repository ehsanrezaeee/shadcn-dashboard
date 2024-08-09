"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogins(sessionData: any) {
  //   cookies().set("Ace1", sessionData.data.token);
  redirect(sessionData);
}
