import { unstable_setRequestLocale } from "next-intl/server";
import Login from "../_components/Login";

const LoginPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <Login />;
};

export default LoginPage;
