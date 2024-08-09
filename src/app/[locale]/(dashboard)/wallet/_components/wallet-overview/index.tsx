import React from "react";

// icons
import { Eye, InfoIcon } from "lucide-react";

// antd
import { Segmented } from "antd";
import Link from "next/link";

const WalletOverView = () => {
  return (
    <div className="col-span-12 lg:col-span-5 rounded-[4px] bg-white h-56 p-6 grid grid-cols-12 grid-rows-12">
      <div className="col-span-12 row-span-3 flex flex-row items-start justify-between">
        <div className="flex items-center justify-center">
          <span className="text=[#010102] me-1">کیف پول</span>
          <Eye />
        </div>
        <div className="w-[164px]">
          <Segmented
            dir="ltr"
            options={["تومان", "تتر"]}
            onChange={(value) => {
              console.log(value);
            }}
            block
          />
        </div>
      </div>

      <div className="col-span-12 row-span-6 flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-center text-[#424655]">
          <span className="text-[14px] font-medium leading-[170%]">
            ارزش تخمینی
          </span>
          <span dir="ltr" className="text-[22px] font-bold leading-[165%]">
            ۳,۵۱۶,۱۰۰,۰۰۰{" "}
            <span className="text-[16px] font-normal text-[#C2C6D8]">IRT</span>
          </span>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <div className="flex gap-1">
            <span className="text-[14px] font-medium leading text-[#46464F]">
              تغییر در ۲۴ ساعت
            </span>
            <InfoIcon />
          </div>
          <div className="flex items-center flex-nowrap gap-2">
            <span
              dir="ltr"
              className="text-[#499782] text-[12px] font-normal leading-[165%]"
            >
              +۱۵۴,۲۳۶
              <span className="text-[#C7C5D0]"> IRT</span>
            </span>
            <div className="px-2 py-[2px] text-[11px] font-medium leading-[168%] border border-[#E0F8E9] rounded-full bg-[#49978214] text-[#499782]">
              +۴.۵۴٪
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 row-span-3 grid grid-cols-12 gap-x-2 content-end">
        <Link
          className="col-span-6 flex items-center justify-center h-9 bg-[#1570EF] rounded-[4px] text-[#FFFFFF] border border-[#1570EF]"
          href={"/wallet/deposit/fiat"}
        >
          واریز تومانی
        </Link>

        <Link
          href={"/wallet/withdraw/fiat"}
          className="col-span-6 flex items-center justify-center h-9 bg-transparent rounded-[4px] text-[#1570EF] border border-[#1570EF]"
        >
          برداشت تومانی
        </Link>
      </div>
    </div>
  );
};

export default WalletOverView;
