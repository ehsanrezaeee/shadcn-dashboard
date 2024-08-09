import { unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  redirect("/dashboard");
  return <div></div>;
};

export default page;
