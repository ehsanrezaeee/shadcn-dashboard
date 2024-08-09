import type { Metadata } from "next";
import LoginLayout from "./_components/LoginLayout";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};
const locales = ["fa", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "ورود و ثبت نام | پلتفرم آموزش آنلاین استیچ",
  description: "در این پلتفرم آموزش های آنلاین کاربردی را بیاموزید",
};

export default function AuthLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <div className="w-full h-full">
      <LoginLayout>{children}</LoginLayout>
    </div>
  );
}
