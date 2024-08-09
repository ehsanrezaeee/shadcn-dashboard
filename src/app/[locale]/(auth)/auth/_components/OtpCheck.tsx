"use client";

import axios from "axios";
import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  useEffect,
  useRef,
} from "react";

import { getTimeObjectFromSeconds } from "./../../../../../lib/helperFunction";
import { toast } from "react-toastify";
import SetPass from "./SetPass";

interface Result {
  data: string;
  code: number;
  captcha_id: string;
  temp_token: string;
}

interface Base {
  message: string;
  status: number;
}
interface ReceivedJson {
  result: Result;
  base: Base;
}

const OtpCheck = ({
  setInitialForm,
  initialForm,
  mobile,
  showOTP,
  setShowOTP,
  resetForm,
}: {
  initialForm: boolean;
  setInitialForm: Dispatch<SetStateAction<boolean>>;
  mobile: string | number;
  showOTP: boolean;
  setShowOTP: Dispatch<SetStateAction<boolean>>;
  resetForm: any;
}) => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [num3, setNum3] = useState<string>("");
  const [num4, setNum4] = useState<string>("");

  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const num3Ref = useRef<HTMLInputElement>(null);
  const num4Ref = useRef<HTMLInputElement>(null);
  const num5Ref = useRef<HTMLInputElement>(null);

  const [secondRemaining, setSecondRemaining] = useState(120);
  const [temp, setTemp] = useState<ReceivedJson>();

  useEffect(() => {
    setInterval(() => {
      setSecondRemaining((old) => {
        return old > 0 ? old - 1 : 0;
      });
    }, 1000);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const code = `${num1}${num2}${num3}${num4}`;
    const dataPostAfterOtp = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/otp/verify?phone_number=${mobile}`,
      { otp: code }
    );

    if (
      dataPostAfterOtp.data.base.status == "200" &&
      dataPostAfterOtp.data.base.message == "OK"
    ) {
      setTemp(dataPostAfterOtp.data);
      setShowOTP(false);
    } else if (dataPostAfterOtp.data.base.status == "500") {
      toast.error("کد ارسالی به تلفن که وارد کردید صحیح نمی باشد", {
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

  const handleOtpAgain = async () => {
    const code = `${num1}${num2}${num3}${num4}`;
    const dataOtp = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/otp/verify?phone_number=${mobile}`,
      {
        otp: code,
      }
    );
    toast.success("کد جدید برای شما ارسال گردید", {
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
  };

  return (
    <>
      {showOTP && (
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

          <div className="dark:bg-slate-900 flex items-center justify-center mt-8">
            <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center border border-gray-400 border-dashed p-4 rounded-lg">
                    <div className="text-center">
                      <h2 className="block text-md font-bold text-gray-800 dark:text-white mb-6">
                        کد ارسال شده به شماره{" "}
                        <span className="text-blue-600"> {mobile} </span> را
                        وارد کنید
                      </h2>
                    </div>
                    <div dir="ltr" className="flex space-x-3">
                      <input
                        ref={num1Ref}
                        value={num1}
                        onChange={(e) => {
                          setNum1(e.target.value);
                          num2Ref.current?.focus();
                        }}
                        type="text"
                        className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="-"
                        data-hs-pin-input-item
                        autoFocus
                        maxLength={1}
                      />
                      <input
                        ref={num2Ref}
                        value={num2}
                        onChange={(e) => {
                          setNum2(e.target.value);
                          num3Ref.current?.focus();
                        }}
                        type="text"
                        className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="-"
                        maxLength={1}
                      />
                      <input
                        ref={num3Ref}
                        value={num3}
                        onChange={(e) => {
                          setNum3(e.target.value);
                          num4Ref.current?.focus();
                        }}
                        type="text"
                        className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="-"
                        maxLength={1}
                      />
                      <input
                        ref={num4Ref}
                        value={num4}
                        onChange={(e) => {
                          setNum4(e.target.value);
                          num5Ref.current?.focus();
                        }}
                        type="text"
                        className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="-"
                        maxLength={1}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 mt-6">
                    <button
                      disabled={secondRemaining !== 0}
                      type="button"
                      onClick={() => {
                        handleOtpAgain();
                        setSecondRemaining(120);
                        setNum1("");
                        setNum2("");
                        setNum3("");
                        setNum4("");
                      }}
                      className={`border border-gray-300 rounded p-3 flex flex-row gap-2 ${
                        secondRemaining !== 0
                          ? "bg-gray-200 text-gray-300"
                          : "hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      <span>ارسال مجدد کد</span>
                      <span>{getTimeObjectFromSeconds(secondRemaining)}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        location.reload();
                        // setInitialForm(!initialForm);
                        // setShowOTP(!showOTP);
                        // resetForm();
                      }}
                      className="border border-gray-300 rounded p-3 hover:bg-purple-500"
                    >
                      اصلاح شماره موبایل
                    </button>
                  </div>
                  <button
                    className="bg-blue-600 rounded-[12px] p-2 w-full text-white mt-2"
                    type="submit"
                  >
                    تایید
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {temp?.base?.message == "OK" && temp?.base?.status == 200 && (
        <SetPass tempToken={temp.result.temp_token} />
      )}
    </>
  );
};

export default OtpCheck;
