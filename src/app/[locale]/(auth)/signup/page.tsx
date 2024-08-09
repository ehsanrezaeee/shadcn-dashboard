import { unstable_setRequestLocale } from "next-intl/server";
import SignUp from "../_components/SignUp";

const SignUpPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
