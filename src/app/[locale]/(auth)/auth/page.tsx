import { Suspense } from "react";
import AuthLoginReg from "../_components/AuthLoginReg";
import { unstable_setRequestLocale } from "next-intl/server";
import AuthLoginRegEmail from "../_components/AuthLoginRegEmail";

const AuthPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLoginRegEmail locale={locale} />
      </Suspense>
    </div>
  );
};

export default AuthPage;
