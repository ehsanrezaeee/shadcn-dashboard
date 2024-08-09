"use client";

import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import OtpCheck from "../auth/_components/OtpCheck";

interface IFormInput {
  mobile: number;
}

interface Result {
  next_step: string;
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
});

const ForgetPassMobile = ({
  captcha,
  captcha_code,
}: {
  captcha: any;
  captcha_code: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(phoneNumberSchema),
  });

  const [postData, setPostData] = useState<ReceivedJson>();
  const [initialForm, setInitialForm] = useState(true);
  const [mobile, setMobile] = useState<number>();
  const [showOTP, setShowOTP] = useState(true);

  const onSubmit: SubmitHandler<IFormInput> = async (data, event) => {
    event?.preventDefault();
    // Handle form submission
    setMobile(data.mobile);

    const data3 = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/otp?phone_number=${data.mobile}`,
      {
        captcha_id: captcha.result.id,
        captcha_code: captcha_code,
      }
    );
    if (data3.data.base.status == "200") {
      setPostData(data3.data);
      setInitialForm(false);
    } else if (data3.data.base.status == "500") {
      toast.error("شماره موبایل یا کپچا اشتباه وارد شده است", {
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
    }
  };

  return (
    <>
      {initialForm && (
        <div className="mx-3 shadow-2xl rounded-xl my-3 p-2 bg-white">
          <div className="p-3 border border-gray-400 rounded m-2 flex flex-col items-center justify-center">
            <p className="p-3 text-xs text-center">
              اطمینان حاصل کنید که آدرس مرورگرتان با آدرس زیر یکسان باشد
            </p>
            <p className="text-xs">
              <strong className="text-blue-600">https://</strong>
              {"steach.com/auth"}
            </p>
          </div>

          <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  فراموشی رمز عبور
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  رمز عبور خود را به خاطر آوردید؟
                  <button
                    className="text-blue-600 mx-2 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => {
                      location.reload();
                    }}
                  >
                    از اینجا وارد شوید
                  </button>
                </p>
              </div>

              <div className="mt-5">
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
                              className="py-3 px-4 block text-left w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              placeholder="09123456789"
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
                    <button
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
      {postData?.base?.message == "OK" && (
        <OtpCheck
          resetForm={reset}
          showOTP={showOTP}
          setShowOTP={setShowOTP}
          setInitialForm={setInitialForm}
          initialForm={initialForm}
          mobile={mobile as number}
        />
      )}
    </>
  );
};

export default ForgetPassMobile;
