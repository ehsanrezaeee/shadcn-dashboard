"use client";

import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import OtpCheck from "../auth/_components/OtpCheck";
import PassLogin from "../auth/_components/PassLogin";
import { toast } from "react-toastify";
import Image from "next/image";
import { GetDataFromQuery } from "@/lib/api/getDataFromQuery";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useTextDirection from "@/hooks/useTextDirection";
import SignUpComponent from "../auth/_components/SignUpComponent";
import { Headphones, RotateCw } from "lucide-react";
import { Progress } from "antd";
import type { ProgressProps } from "antd";
import CheckEmail from "../auth/_components/CheckEmail";

interface Result {
  is_registered: boolean;
}

interface Base {
  message: string;
  status: number;
}

interface ReceivedJson {
  result: Result;
  base: Base;
}

const emailSchema = z.object({
  email: z.string().email("Please use Correct Email"),
  password: z.string().min(8, { message: "رمز حداقل باید ۸ کاراکتر باشد" }),
  relative: z.string().optional(),
  termsAndConditions: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});
type IFormInput = z.infer<typeof emailSchema>;

const AuthLoginRegEmail = ({ locale }: { locale: string }) => {
  const [refer, setRefer] = useState(false);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  const [postData, setPostData] = useState<ReceivedJson>();
  const [postData2, setPostData2] = useState<ReceivedJson>();
  const [initialForm, setInitialForm] = useState(true);
  const [email, setEmail] = useState<string>();
  const [showOTP, setShowOTP] = useState(true);
  const [timerKey, setTimerKey] = useState(0);
  const [verify_value, setVerifyValue] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState("login");
  const [percent, setPercent] = useState(0);

  const direction = useTextDirection(locale);

  const cpatchaData = GetDataFromQuery({
    out: false,
    key: "capt",
    url: "api/v2/auth/captcha",
    isFeature: false,
    interval: 30000,
  });

  const captchaaa = cpatchaData?.data;

  const t = useTranslations("Auth");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(emailSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data, event) => {
    event?.preventDefault();
    // Handle form submission
    setEmail(data.email);
    const captcha_id = captchaaa?.result.id;
    const data2 = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/users/registration-status?email=${data.email}`
    );
    setPostData(data2.data);

    if (data2?.data.result?.is_registered == false) {
      const data3 = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/otp?email=${data.email}`,
        {
          captcha_id: captcha_id,
          captcha_code: verify_value,
        }
      );
      if (data3.data.base.message == "OK" && data3.data.base.status == 200) {
        setInitialForm(false);
      }

      setPostData2(data3.data);
      if (data3.data.base.status == 500) {
        toast.error("کد امنیتی را صحیح وارد کنید", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "text-sm",
        });
        cpatchaData.refetch();
      }
    } else if (data2?.data.result?.is_registered == true) {
      setInitialForm(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        // Increment by approximately 3.33% per second to reach 100% in 30 seconds
        const newPercent = prevPercent + 3.33;
        if (newPercent >= 100) {
          // Reset progress to 0 and continue the cycle
          cpatchaData.refetch();
          return 0;
        }
        return newPercent;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#52c41a",
    "100%": "#ff4d4f",
  };

  return (
    <Tabs
      dir={direction}
      defaultValue={selectedTab}
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      <TabsContent value="login">
        <div className="max-w-md">
          {initialForm && (
            <div className="mx-3">
              <div>
                <Image
                  src={"/images/Content.svg"}
                  height={40}
                  width={40}
                  alt="Steach"
                />
              </div>
              <div className="w-full my-8">
                <h1 className="block text-2xl font-bold text-textColor-primary-light dark:text-white mb-3">
                  {t("login-phrase")}
                </h1>
                <p className=" text-textColor-tertiary-light">{t("detail")}</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
                    >
                      {t("email")}
                    </label>
                    <div className="relative">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            placeholder="example@example.org"
                            style={{
                              borderColor: errors.email ? "red" : "inherit",
                            }}
                          />
                        )}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
                    >
                      {t("password")}
                    </label>
                    <div className="relative">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            placeholder="•••••••••"
                            style={{
                              borderColor: errors.password ? "red" : "inherit",
                            }}
                          />
                        )}
                      />
                      {errors.password && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="captcha"
                      className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
                    >
                      {t("captcha")}
                    </label>
                    <div
                      className={`flex flex-row items-center justify-center gap-2`}
                    >
                      <div className="relative">
                        <input
                          name="captcha"
                          id="captcha"
                          value={verify_value}
                          onChange={(e) => setVerifyValue(e.target.value)}
                          type="text"
                          placeholder={t("captchacodeplaceholder")}
                          className="py-5 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                      </div>
                      <div className="rounded-lg">
                        <div className="flex flex-row gap-1 sm:gap-3 items-center justify-center border border-dashed border-gray-400 rounded-lg">
                          {cpatchaData.isPending && (
                            <div>در حال بارگذاری کپچا</div>
                          )}
                          {cpatchaData?.data && (
                            <div>
                              {/* <Image
                                src={captchaaa?.result.data as string}
                                width={80}
                                height={80}
                                alt="captcha"
                                style={{ height: "auto" }}
                              /> */}
                              <div dir="ltr">
                                <Progress
                                  strokeColor={twoColors}
                                  size={"small"}
                                  percent={Math.round(percent)}
                                  showInfo={false}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <button
                          type="button"
                          className="px-2 border-borderColor-primary-light border-2 rounded-lg h-10 w-10"
                          onClick={() => {
                            cpatchaData.refetch();
                            setPercent(0);
                          }}
                        >
                          <RotateCw size={20} />
                        </button>
                        <button
                          type="button"
                          className="px-2 border-borderColor-primary-light border-2 rounded-lg h-10 w-10"
                        >
                          <Headphones size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowOTP(true);
                    }}
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-brand-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    {t("sign-in")}
                  </button>
                </div>
              </form>
              <button
                type="button"
                className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Image
                  src={"/images/Social icon.svg"}
                  height={20}
                  width={20}
                  alt="Steach"
                />
                {t("sign-in-google")}
              </button>
              <button
                type="button"
                className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Image
                  src={"/images/Social icon-facebook.svg"}
                  height={20}
                  width={20}
                  alt="Steach"
                />
                {t("sign-in-facebook")}
              </button>
              <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
                {t("no-account")}
                <button
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2"
                  onClick={() => {
                    setSelectedTab("signup");
                  }}
                >
                  {t("sign-up")}
                </button>
              </p>
            </div>
          )}
          {/* <CheckEmail /> */}
        </div>
      </TabsContent>
      <TabsContent value="signup">
        <SignUpComponent setSelectedTab={setSelectedTab} />
      </TabsContent>
    </Tabs>
  );
};

export default AuthLoginRegEmail;
