"use client";

// react dep
import { FC, useEffect, useState } from "react";

// next dep
import dynamic from "next/dynamic";

// styles
import classes from "./style.module.css";

// icons
import { BsSignpost2 } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbDeviceMobile } from "react-icons/tb";
import { LuFingerprint } from "react-icons/lu";
import { FiSave } from "react-icons/fi";

// lottie file
import lottieAvatar from "../../../../../../../public/lottie/Animation - 1717916030656.json";

const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false, // This line is important. It's what prevents server-side render
});
// lottie lib

// lang hooks
import { useTranslations } from "next-intl";

// redux toolkit for userdata
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchUserData, selectUserData } from "@/lib/features/UserDataSlice";
import AntStepper from "../stepper/AntStepper";

const UserInfoBox = () => {
  // lang hook
  const gt = useTranslations("Global");

  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  // pause lottie file state
  const [isPaused, setIsPaused] = useState(true);
  const [enableChangeNumber, setEnableChangeNumber] = useState(false);

  const userData3 = userData?.userInfo?.result?.user_info;

  return (
    <div className="col-span-12 bg-white overflow-hidden flex flex-col rounded-[16px] shadow-appPaper mb-4 p-2">
      <div
        className={`bg-no-repeat object-cover bg-cover bg-center h-20 md:h-36 ${classes["userInfo-header"]}`}
      ></div>
      <div className="p-2 md:p-4 pt-2 flex flex-col text-right w-full flex-1 relative">
        <div>
          <div
            className="relative w-full md:pr-[144px] flex flex-row-reverse justify-between items-center pt-3 pb-12"
            dir="rtl"
          >
            <p className="px-2 py-1 text-[12px] bg-cyan-600 text-white rounded-lg">
              {userData3?.role === "registered_user" && "سطح پایه"}{" "}
              {userData3?.role === "kyc_1st_level" && "سطح برنزی"}
              {userData3?.role === "kyc_2nd_level" && "سطح نقره ای"}
            </p>
            <p className="text-[14px] md:text-[20px] font-bold">
              {userData3?.first_name + " " + userData3?.last_name}
            </p>
          </div>

          <div className="grid grid-cols-12 gap-x-2 md:gap-x-8">
            <div className="col-span-12 md:col-span-6 my-2">
              <div className="relative w-full m-auto">
                <p
                  className="absolute end-0 flex items-center pe-4 text-[14px] h-[100%] text-[#0891B2] font-bold z-10 cursor-pointer"
                  onClick={() => setEnableChangeNumber(!enableChangeNumber)}
                >
                  {gt("edit")}
                </p>
                <input
                  type="text"
                  value={userData3?.phone_number}
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder={gt("phone")}
                  readOnly
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <TbDeviceMobile className={`text-[18px] text-[#142d30]`} />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 my-2">
              <div className="relative w-full m-auto">
                <input
                  type="text"
                  value={userData3?.national_code}
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder={gt("nationalCode")}
                  disabled
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <LuFingerprint className={`text-[18px] text-[#142d30]`} />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 my-2">
              <div className="relative w-full m-auto">
                <input
                  type="email"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder={gt("email")}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <HiOutlineMail className={`text-[18px] text-[#142d30]`} />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 my-2">
              <div className="relative w-full m-auto">
                <input
                  type="text"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder={gt("address")}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <BsSignpost2 className={`text-[18px] text-[#142d30]`} />
                </div>
              </div>
            </div>

            <div className="col-span-12 my-2 flex items-center justify-center">
              <div className="w-full md:w-full flex items-center justify-end">
                <button className="px-4 py-2 text-[14px] bg-cyan-600 text-white rounded-lg text-nowrap md:min-w-15 flex flex-nowrap items-center justify-center">
                  {gt("save")}
                  <div className="flex items-center pointer-events-none py-1">
                    <FiSave className={`mx-2 text-[16px]`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {enableChangeNumber && <AntStepper />}
      <div className="h-24 w-24 top-6 right-[50%] translate-x-[50%] md:translate-x-0 md:w-32 md:h-32 md:top-16 md:right-6 absolute ">
        <Lottie
          loop
          animationData={lottieAvatar}
          play={isPaused}
          style={{ width: "auto", height: "auto" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
      </div>
    </div>
  );
};

export default UserInfoBox;
