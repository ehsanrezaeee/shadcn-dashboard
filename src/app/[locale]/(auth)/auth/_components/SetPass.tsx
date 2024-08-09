"use client";

import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { handleLogin } from "@/lib/cookieActions";

type FormValues = {
  password: string;
  password_confirm: string;
  referral_code?: string;
};
const schema = z
  .object({
    password: z.string().min(8, { message: "رمز حداقل باید ۸ کاراکتر باشد" }),
    password_confirm: z
      .string()
      .min(8, { message: "تایید رمز حداقل باید ۸ کاراکتر باشد" })
      .max(100),
    referral_code: z.string().optional(),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "رمز با تایید رمز مطابقت ندارد",
    path: ["password_confirm"],
  });

const SetPass = ({ tempToken }: { tempToken: string }) => {
  const [refer, setRefer] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Handle form submission
    setLoading(true);
    const { password, password_confirm, referral_code } = data;
    const dataPostAfterSettingPass = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/users/password`,
      { password, password_confirm, referral_code },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`, // Insert your Bearer token here
        },
      }
    );

    if (dataPostAfterSettingPass.data.base.status == "200") {
      const tokenGenerate = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/password`,
        { password, password_confirm },
        {
          headers: {
            Authorization: `Bearer ${tempToken}`, // Insert your Bearer token here
          },
        }
      );
      if (
        tokenGenerate.data.base.message == "OK" &&
        tokenGenerate.data.base.status == 200
      ) {
        handleLogin(tokenGenerate.data);
        toast.success("ثبت نام شما انجام شد. در حال هدایت به داشبورد هستید", {
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
      } else {
        toast.error("مشکلی در ثبت نام بوحود آمده. دوباره تلاش کنید", {
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
      }
    } else if (dataPostAfterSettingPass.data.base.status == "500") {
      toast.error("امکان ثبت نام وجود ندارد", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm text-nowrap w-64",
      });
      setLoading(false);
    }
  };
  return (
    <div className="mx-3 shadow-2xl rounded-xl my-3 p-2 bg-white">
      <div className="p-3 border border-gray-400 rounded m-2 flex flex-col items-center justify-center">
        <p className="p-3 text-xs text-center">
          اطمینان حاصل کنید که آدرس مرورگرتان با آدرس زیر یکسان باشد
        </p>
        <p className="text-xs">
          <strong className="text-blue-600">https://</strong>
          steach.com/auth
        </p>
      </div>

      <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <h2 className="my-1">رمز عبور خود را ثبت کنید</h2>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    رمز
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password_confirm"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    تایید رمز
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      {...register("password_confirm")}
                    />
                    {errors.password_confirm && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.password_confirm.message}
                      </p>
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
                        name="referral_code"
                        control={control}
                        defaultValue={referral ?? ""}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            placeholder="referral code"
                            style={{
                              borderColor: errors.referral_code
                                ? "red"
                                : "inherit",
                            }}
                          />
                        )}
                      />
                      {errors.referral_code && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.referral_code.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {loading ? (
                    <Image
                      src={"/images/Dual Ball-1s-201px (1).svg"}
                      width={45}
                      height={45}
                      alt="spinner"
                    />
                  ) : (
                    "ثبت رمز عبور"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPass;
