import { Mail } from "lucide-react";
import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTranslations } from "next-intl";

const CheckEmail = () => {
  const t = useTranslations("Auth");
  return (
    <div dir="ltr" className="items-center justify-center flex flex-col gap-6">
      <button className="p-3 border-borderColor-secondary-light border rounded-lg">
        <Mail />
      </button>
      <h2>Check Your Email</h2>
      <p className=" text-textColor-tertiary-light ">
        We sent a verification link to mahdi@steach.org
      </p>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <button
        type="submit"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-brand-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {t("verify")}
      </button>
      <div className="flex items-center justify-center gap-2">
        <p>Didn&apos;t receive the email?</p>{" "}
        <button className="text-bgColor-brand-section-light">
          Click to resend
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
