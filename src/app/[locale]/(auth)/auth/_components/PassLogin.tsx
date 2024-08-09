"use client";

// form validation zod react-hook-form
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// setting cookie and redirecting
import { handleLogin } from "@/lib/cookieActions";

// icons
import { FiEye, FiEyeOff } from "react-icons/fi";

// react hooks
import { useState } from "react";

// data fetching
import axios from "axios";

// toast
import { toast } from "react-toastify";

// components
import ForgetPassMobile from "../../_components/ForgetPassMobile";
import Image from "next/image";
import { IoReloadCircle } from "react-icons/io5";

interface Result {
  msg: string;
  data: string;
  captchaId: string;
}

interface Base {
  message: string;
  status: number;
}

type FormValues = {
  password: string;
};
const schema = z.object({
  password: z.string().min(8, { message: "رمز حداقل باید ۸ کاراکتر باشد" }),
});

const PassLogin = ({
  mobile,
  captcha,
  captcha_code,
  refetchCaptcha,
}: {
  mobile: string | number;
  captcha: any;
  captcha_code: any;
  refetchCaptcha: any;
}) => {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForget, setShowForget] = useState(false);
  const [hidePassLogin, setHidePassLogin] = useState(false);
  const [reCaptcha, setReCaptcha] = useState(false);
  const [captchaNew, setCaptchaNew] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Handle form submission
    const { password } = data;
    const captcha_id = captcha.result.id;
    setLoading(true);
    const dataPostAfterOtp = await axios.post(
      `${
        process.env.NEXT_PUBLIC_BASE_URL_BACK_END
      }/api/v2/auth/password?phone_number=${mobile}&captcha.captcha_id=${captcha_id}&captcha.captcha_code=${
        captchaNew ? captchaNew : captcha_code
      }`,
      {
        password,
      }
    );
    if (dataPostAfterOtp.data.base.status == "200") {
      handleLogin(dataPostAfterOtp.data);

      toast.success("اندکی تامل کنید در حال هدایت به داشبورد هستید", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm",
      });
    } else if (dataPostAfterOtp.data.base.status == "500") {
      toast.error("پسورد یا کپچا صحیح نیست", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm",
      });
      setLoading(false);
      setReCaptcha(true);
      refetchCaptcha();
    }
  };

  return (
    <>
      {!hidePassLogin && (
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
            <div className="p-4 sm:p-7">
              <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          رمز عبور
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setShowForget(true);
                            setHidePassLogin(true);
                          }}
                          className="text-sm mb-2 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          رمز عبور خود را فراموش کردید؟
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={!currentPasswordVisible ? "password" : "text"}
                          id="password"
                          className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          {...register("password")}
                        />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none cursor-auto z-10">
                          {currentPasswordVisible ? (
                            <FiEye
                              className={`text-[16px] text-[#142d30]`}
                              onClick={() => {
                                setCurrentPasswordVisible(
                                  (prevState) => !prevState
                                );
                              }}
                            />
                          ) : (
                            <FiEyeOff
                              className={`text-[16px] text-[#142d30]`}
                              onClick={() => {
                                setCurrentPasswordVisible(
                                  (prevState) => !prevState
                                );
                              }}
                            />
                          )}
                        </div>
                        {errors.password && (
                          <p className="text-xs text-red-600 mt-1">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      {reCaptcha && (
                        <div className="my-4 border border-dashed border-gray-400 p-4 rounded-lg">
                          <p className="my-2">
                            کد امنیتی تصویر مقابل را نیز وارد کنید
                          </p>
                          <div className="flex flex-row gap-1 sm:gap-3 h-[3rem] items-center justify-center">
                            <input
                              value={captchaNew}
                              onChange={(e) => setCaptchaNew(e.target.value)}
                              type="text"
                              className="py-3 px-4 block my-2 w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            />

                            {captcha && (
                              <>
                                <Image
                                  src={captcha?.result.data as string}
                                  width={110}
                                  height={100}
                                  alt="captcha"
                                />

                                <button
                                  type="button"
                                  onClick={() => {
                                    refetchCaptcha();
                                  }}
                                >
                                  <IoReloadCircle className="text-lg" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-70 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      {loading ? (
                        <Image
                          src={"/images/Dual Ball-1s-201px (1).svg"}
                          width={45}
                          height={45}
                          alt="spinner"
                        />
                      ) : (
                        "ورود"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showForget && (
        <ForgetPassMobile captcha={captcha} captcha_code={captcha_code} />
      )}
    </>
  );
};

export default PassLogin;
