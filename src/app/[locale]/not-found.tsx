"use client";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

import { Link } from "@/navigation";
import { Result } from "antd";

export default function NotFoundPage() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="گفت یافت می نشود گشته ایم ما. گفت آنچه یافت می نشود آنم آرزوست"
        extra={<Link href={"/"}>بازگشت به خانه </Link>}
      />
    </div>
  );
}
