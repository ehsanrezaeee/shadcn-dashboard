import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const accToken = request.cookies.get("Ace1")?.value ?? "";

  interface token {
    exp: number;
    iat: number;
    nbf: number;
    sub: string;
    token_uuid: string;
  }

  if (accToken) {
    // const decodedAcc = decodeJwt(accToken) as token;

    // const expirationTimeAcc = decodedAcc?.exp;
    // if (expirationTimeAcc <= Date.now() / 1000) {
    //   if (request.nextUrl.pathname !== "/auth") {
    //     return NextResponse.redirect(new URL("/auth", request.url));
    //   }
    //   const handleI18nRouting = createMiddleware({
    //     // A list of all locales that are supported
    //     locales,
    //     localeDetection: false,
    //     localePrefix,
    //     // Used when no locale matches
    //     defaultLocale: "fa",
    //   });

    //   let response = handleI18nRouting(request);

    //   return response;
    // } else {
    const handleI18nRouting = createMiddleware({
      // A list of all locales that are supported
      locales,
      localeDetection: false,
      localePrefix,
      // Used when no locale matches
      defaultLocale: "en",
    });

    let response = handleI18nRouting(request);

    return response;
  } else {
    // if (request.nextUrl.pathname !== "/auth") {
    //   return NextResponse.redirect(new URL("/auth", request.url));
    // }
  }

  const handleI18nRouting = createMiddleware({
    // A list of all locales that are supported
    locales,
    localeDetection: false,
    localePrefix,
    // Used when no locale matches
    defaultLocale: "en",
  });

  let response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    "/(fa|en)/:path*",
    "/((?!auth|login|$).*)]",
  ],
};
