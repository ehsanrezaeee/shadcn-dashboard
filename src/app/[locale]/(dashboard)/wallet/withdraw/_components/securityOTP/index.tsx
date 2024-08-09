"use client";
import { getTimeObjectFromSeconds } from "@/lib/helperFunction";
import { p2e } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const SecurityOTP = () => {
  const [load, setLoad] = useState(false);
  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const num3Ref = useRef<HTMLInputElement>(null);
  const num4Ref = useRef<HTMLInputElement>(null);
  const num5Ref = useRef<HTMLInputElement>(null);
  const num6Ref = useRef<HTMLInputElement>(null);
  const [secondRemaining, setSecondRemaining] = useState(120);
  const router = useRouter();
  const submitHandler = async (formData: FormData) => {
    const code = `${formData.get("qrcode0")}${formData.get(
      "qrcode1"
    )}${formData.get("qrcode2")}${formData.get("qrcode3")}${formData.get(
      "qrcode4"
    )}${formData.get("qrcode5")}`;
    const rawFormData = {
      totp: p2e(code as string),
    };
    setLoad(true);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/`,
      rawFormData,
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    setLoad(false);
    if (res.data.base.message == "OK" && res.data.base.status == 200) {
    }
  };
  useEffect(() => {
    setInterval(() => {
      setSecondRemaining((old) => {
        return old > 0 ? old - 1 : 0;
      });
    }, 1000);
  }, []);
  return (
    <div className="h-fit">
      <div className="rounded-[8px] bg-white w-full text-[16px] p-4 flex flex-col">
        <p className="mb-4">تایید امنیتی برداشت</p>
        <p className="text-[14px]">
          لطفا کد ۶ رقمی ارسال شده به شماره تلفن **** را وارد کنید
        </p>

        <div className="my-3">
          <form
            action={submitHandler}
            className="flex flex-col items-center justify-center"
          >
            <div className="grid gap-y-4">
              <div>
                <div dir="ltr" className="flex space-x-3">
                  <input
                    ref={num1Ref}
                    onChange={(e) => {
                      num2Ref.current?.focus();
                    }}
                    id="qrcode0"
                    name="qrcode0"
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    data-hs-pin-input-item
                    autoFocus
                    maxLength={1}
                  />
                  <input
                    ref={num2Ref}
                    onChange={(e) => {
                      num3Ref.current?.focus();
                    }}
                    id="qrcode1"
                    name="qrcode1"
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    maxLength={1}
                  />
                  <input
                    ref={num3Ref}
                    onChange={(e) => {
                      num4Ref.current?.focus();
                    }}
                    id="qrcode2"
                    name="qrcode2"
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    maxLength={1}
                  />
                  <input
                    ref={num4Ref}
                    onChange={(e) => {
                      num5Ref.current?.focus();
                    }}
                    id="qrcode3"
                    name="qrcode3"
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    maxLength={1}
                  />
                  <input
                    ref={num5Ref}
                    onChange={(e) => {
                      num6Ref.current?.focus();
                    }}
                    id="qrcode4"
                    name="qrcode4"
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    maxLength={1}
                  />
                  <input
                    id="qrcode5"
                    name="qrcode5"
                    ref={num6Ref}
                    type="text"
                    className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="-"
                    maxLength={1}
                  />
                </div>
              </div>
            </div>
            <button
              disabled={secondRemaining !== 0}
              type="button"
              onClick={() => {
                setSecondRemaining(120);
              }}
              className={`border border-gray-300 mt-6 rounded p-3 flex flex-row gap-2 ${
                secondRemaining !== 0
                  ? "bg-gray-200 text-gray-300"
                  : "hover:bg-blue-600 hover:text-white"
              }`}
            >
              <span>ارسال مجدد کد</span>
              <span>{getTimeObjectFromSeconds(secondRemaining)}</span>
            </button>
            <div className="grid grid-cols-12 gap-2 mt-6 w-full">
              <button
                onClick={() => router.push("/wallet")}
                className="col-span-4 flex items-center justify-center h-9 bg-transparent rounded-[4px] text-[#1570EF] border border-[#1570EF]"
              >
                بازگشت
              </button>
              <button
                className="col-span-8 flex items-center justify-center h-9 bg-[#1570EF] rounded-[4px] text-[#FFFFFF] border border-[#1570EF]"
                type="submit"
                aria-disabled={load}
              >
                تکمیل برداشت
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecurityOTP;
