import { unstable_setRequestLocale } from "next-intl/server";
import ForgetPass from "../_components/ForgetPass";

const ForgetPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <ForgetPass />
    </div>
  );
};

export default ForgetPage;
