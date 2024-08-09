"use client";
import React, { useState } from "react";
import { Steps, theme } from "antd";
import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormInput {
  phoneNumber: number;
}
const phoneNumberSchema = z.object({
  phoneNumber: z
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
const AntStepper = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(phoneNumberSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission
    console.log(data);
    next();
  };
  const steps = [
    {
      title: "ورود شماره جدید",
      content: (
        <div className="rounded-[12px] w-full bg-white flex flex-row items-center justify-center border border-gray-300 p-3 my-3 shadow-lg">
          <div className="dark:bg-slate-900 flex items-center justify-center mt-8">
            <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        شماره موبایل جدید خود را وارد کنید
                      </label>
                      <div className="relative">
                        <Controller
                          name="phoneNumber"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              placeholder="09123456789"
                              style={{
                                borderColor: errors.phoneNumber
                                  ? "red"
                                  : "inherit",
                              }}
                            />
                          )}
                        />
                        {errors.phoneNumber && (
                          <p className="text-xs text-red-600 mt-1">
                            {errors.phoneNumber.message}
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
      ),
    },
    {
      title: "ورود کد تایید",
      content: (
        <div className="dark:bg-slate-900 flex items-center justify-center my-3">
          <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h2 className="block text-md font-bold text-gray-800 dark:text-white mb-6">
                  کد ارسال شده به شماره .... را وارد کنید
                </h2>
              </div>

              <form className="flex flex-col items-center justify-center">
                <div dir="ltr" className="flex space-x-3" data-hs-pin-input>
                  <input
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="⚬"
                    data-hs-pin-input-item
                    autoFocus
                  />
                  <input
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="⚬"
                    data-hs-pin-input-item
                  />
                  <input
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="⚬"
                    data-hs-pin-input-item
                  />
                  <input
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="⚬"
                    data-hs-pin-input-item
                  />
                </div>
                <div className="flex flex-row gap-2 mt-6">
                  <button className="border border-gray-300 rounded p-3 hover:bg-purple-500">
                    ارسال مجدد کد
                  </button>
                  <button
                    onClick={() => prev()}
                    className="border border-gray-300 rounded p-3 hover:bg-purple-500"
                  >
                    اصلاح موبایل
                  </button>
                  <button
                    onClick={() => next()}
                    className="border border-gray-300 rounded p-3 hover:bg-purple-500"
                  >
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "پایان",
      content: (
        <div className="dark:bg-slate-900 flex items-center justify-center my-3">
          <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">شماره شما تغییر یافت</div>
          </div>
        </div>
      ),
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className="flex items-center justify-center">
        {steps[current].content}
      </div>
      {/* <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default AntStepper;
