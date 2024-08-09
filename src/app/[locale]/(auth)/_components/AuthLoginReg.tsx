"use client";

import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import OtpCheck from "../auth/_components/OtpCheck";
import PassLogin from "../auth/_components/PassLogin";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { IoReloadCircle } from "react-icons/io5";
interface IFormInput {
  mobile: number | string;
  relative?: string;
}

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

const phoneNumberSchema = z.object({
  mobile: z
    .string()
    .length(11, "شماره تلفن باید ۱۱ رقمی باشد")
    .transform((val) =>
      val
        .replace(/[۰]/g, "0")
        .replace(/[۱]/g, "1")
        .replace(/[۲]/g, "2")
        .replace(/[۳]/g, "3")
        .replace(/[۴]/g, "4")
        .replace(/[۵]/g, "5")
        .replace(/[۶]/g, "6")
        .replace(/[۷]/g, "7")
        .replace(/[۸]/g, "8")
        .replace(/[۹]/g, "9")
    )
    .refine((val) => val.startsWith("0"), {
      message: "شماره تلفن باید با صفر شروع شود",
    }),
  relative: z.string().optional(),
});

const AuthLoginReg = () => {
  const [refer, setRefer] = useState(false);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  const [postData, setPostData] = useState<ReceivedJson>();
  const [postData2, setPostData2] = useState<ReceivedJson>();
  const [initialForm, setInitialForm] = useState(true);
  const [mobile, setMobile] = useState<number | string>();
  const [showOTP, setShowOTP] = useState(true);
  const [timerKey, setTimerKey] = useState(0);
  const [verify_value, setVerifyValue] = useState<string>("");

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["recaptcha"],
    queryFn: () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/captcha`)
        .then((res) => {
          return res.data;
        }),
    refetchInterval: 300000,
  });

  const captchaaa = data;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: { mobile: "" },
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data, event) => {
    event?.preventDefault();
    // Handle form submission
    setMobile(data.mobile);
    const captcha_id = captchaaa?.result.id;
    const data2 = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/users/registration-status?phone_number=${data.mobile}`
    );
    setPostData(data2.data);

    if (data2?.data.result?.is_registered == false) {
      const data3 = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/otp?phone_number=${data.mobile}`,
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
        refetch();
      }
    } else if (data2?.data.result?.is_registered == true) {
      setInitialForm(false);
    }
  };

  return (
    <div className="">
      {initialForm && (
        <div className="mx-3 shadow-2xl rounded-xl my-3 p-2 bg-white">
          <div className="p-2 border border-gray-400 rounded m-2 flex flex-col items-center justify-center">
            <p className="p-2 text-xs text-center">
              اطمینان حاصل کنید که آدرس مرورگرتان با آدرس زیر یکسان باشد
            </p>
            <p className="text-xs">
              <strong className="text-blue-600">https://</strong>
              {"steach.org/auth"}
            </p>
          </div>

          <div className="dark:bg-slate-900 flex items-center justify-center mt-8">
            <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h2 className="block text-xl font-bold text-gray-800 dark:text-white mb-4">
                    ورود / ثبت نام
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        شماره موبایل
                      </label>
                      <div className="relative">
                        <Controller
                          name="mobile"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                              style={{
                                borderColor: errors.mobile ? "red" : "inherit",
                              }}
                            />
                          )}
                        />
                        {errors.mobile && (
                          <p className="text-xs text-red-600 mt-1">
                            {errors.mobile.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="my-4 border border-dashed border-gray-400 p-4 rounded-lg">
                      <p className="my-2">
                        کد امنیتی تصویر مقابل را نیز وارد کنید
                      </p>
                      <div className="flex flex-row gap-1 sm:gap-3 h-[3rem] items-center justify-center">
                        <input
                          value={verify_value}
                          onChange={(e) => setVerifyValue(e.target.value)}
                          type="text"
                          className="py-3 px-4 block my-2 w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                        {isPending && <div>در حال بارگذاری کپچا</div>}
                        {captchaaa && (
                          <>
                            <div className="bg-[#EEF0FE] w-[32px] h-[28px] rounded-full flex items-center justify-center">
                              <CountdownCircleTimer
                                key={timerKey}
                                isPlaying
                                isSmoothColorTransition
                                duration={300}
                                colors={["#5865F2", "#5865F2"]}
                                colorsTime={[0, 0]}
                                onComplete={() => ({
                                  shouldRepeat: true,
                                  delay: 0,
                                })}
                                size={24}
                                strokeWidth={12}
                                trailStrokeWidth={12}
                                strokeLinecap="butt"
                                trailColor="#EEF0FE"
                              >
                                {/* {({ remainingTime }) => remainingTime} */}
                              </CountdownCircleTimer>
                            </div>
                            <Image
                              src={captchaaa?.result.data as string}
                              width={110}
                              height={100}
                              alt="captcha"
                              style={{ height: "auto" }}
                            />

                            <button
                              type="button"
                              onClick={() => {
                                refetch();
                                setTimerKey((prevKey) => prevKey + 1);
                              }}
                            >
                              <IoReloadCircle className="text-lg" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setRefer(!refer);
                        }}
                        className="flex flex-row gap-2 items-center text-sm mb-2 dark:text-white"
                      >
                        <FaRegPlusSquare />
                        کد معرف
                      </button>
                      {refer && (
                        <div className="relative">
                          <Controller
                            name="relative"
                            control={control}
                            defaultValue={referral ?? ""}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="referral code"
                                style={{
                                  borderColor: errors.relative
                                    ? "red"
                                    : "inherit",
                                }}
                              />
                            )}
                          />
                          {errors.relative && (
                            <p className="text-xs text-red-600 mt-1">
                              {errors.relative.message}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <label
                        className="text-sm text-center"
                        htmlFor="termsAndConditions"
                      >
                        <Link className="" href={"/tos"}>
                          تایید به منزله پذیرفتن{" "}
                          <strong className="text-blue-600">{"قوانین"}</strong>{" "}
                          استیچ است
                        </Link>
                      </label>
                    </div>

                    <button
                      onClick={() => {
                        setShowOTP(true);
                      }}
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      تایید
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {postData?.result?.is_registered == false &&
        postData2?.base?.message == "OK" && (
          <OtpCheck
            resetForm={reset}
            showOTP={showOTP}
            setShowOTP={setShowOTP}
            setInitialForm={setInitialForm}
            initialForm={initialForm}
            mobile={mobile as number}
          />
        )}
      {postData?.result?.is_registered == true && (
        <PassLogin
          mobile={mobile as number}
          captcha={captchaaa}
          captcha_code={verify_value}
          refetchCaptcha={refetch}
        />
      )}
    </div>
  );
};

export default AuthLoginReg;
