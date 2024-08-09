"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogin(sessionData: any) {
  cookies().set("Ace1", sessionData.data.token);
  redirect("/dashboard");
}
export async function handleLoginWithoutRedirect(sessionData: any) {
  sessionData &&
    cookies().set("CTA1", sessionData?.result.token_pair.access_token);
  sessionData &&
    cookies().set("CTA2", sessionData?.result.token_pair.refresh_token);
}
export async function handleLogout() {
  cookies().delete("Ace1");
  redirect("/auth");
}
