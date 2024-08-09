"use client";

import Image from "next/image";

// Import useState hooks from React
import { useState } from "react";

// antd
import { Radio, Segmented, Select, Space } from "antd";

// utils tool
import { e2p, extractNumbers, p2e } from "@/lib/utils";

// icons
import { GoInfo } from "react-icons/go";

import { IoIosArrowDown } from "react-icons/io";

// type
import type { RadioChangeEvent } from "antd";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";

const DepositBox = () => {
  const [tradeType, setTradeType] = useState<any>("credit");
  const [selectedCard, setSelectedCard] = useState<any>();

  const [tradeInputs, setTradeInputs] = useState<{
    amount: string;
    price: string;
  }>({
    amount: "0",
    price: "0",
  });

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className="rounded-[8px] bg-white w-full p-3 flex flex-col">
      <p className="my-2 text-[16px]">واریز تومانی</p>
      <div className="w-full flex items-center justify-center depoBox">
        <Segmented
          dir="ltr"
          size="middle"
          value={tradeType || "credit"}
          options={[
            { label: "شناسه دار", value: "tagged" },
            { label: "کارت بانکی", value: "credit" },
          ]}
          onChange={(type) => setTradeType(type)}
        />
      </div>
      {tradeType == "credit" && (
        <form autoComplete="off" className="w-full">
          {/* select crypto section */}
          <div className="mb-4">
            <div className="w-full">
              <p className="leading-[16px] text-[16px] text-right font-medium text-[#1B1B21] mt-6 mb-2">
                کارت بانکی مبدا
              </p>
              <div className="antSelector my-2">
                <Select
                  onChange={(value) => {
                    setSelectedCard(value);
                  }}
                  direction="rtl"
                  className="!w-full"
                  showSearch
                  placeholder="انتخاب حساب بانکی"
                  suffixIcon={<IoIosArrowDown />}
                  options={[
                    {
                      value: "USDT",
                      label: (
                        <div className="w-[94%] h-full flex flex-row items-center justify-start gap-3">
                          <Image
                            src="https://tokens.plnstc.ir/tether-usdt-logo-64x64.png"
                            width="40"
                            height="40"
                            alt="tether"
                            className=""
                          />
                          <div className="flex flex-col items-start justify-center min-h-[44px]">
                            <span className="text-[12px] leading-3 font-bold text-[##46464F] my-[6px]">
                              USDT/IRT
                            </span>
                            <span className="text-[12px] leading-3 font-bold text-[#46464F] my-[6px]">
                              تتر/تومان
                            </span>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-[16px] leading-[20px] mb-1 text-right font-medium mt-6">
                مقدار واریز{" "}
              </p>
              <div
                dir="ltr"
                className="w-full h-10 rounded-[4px] border border-gray-200 flex flex-row items-center justify-between"
              >
                <div className="flex items-center justify-center min-w-[20%] gap-1 px-2 h-full">
                  <Image
                    src="https://tokens.plnstc.ir/toman-irt-logo-32x32.png"
                    alt="USDT"
                    width={20}
                    height={20}
                  />
                  <span className="text-[12px] font-medium h-[20px] mt-[2px] flex items-center justify-center border-r border-[#C7C5D0] text-[#777680] pr-2">
                    IRT
                  </span>
                </div>
                <input
                  value={e2p(tradeInputs.amount)}
                  onChange={(e) => {
                    setTradeInputs((prev) => ({
                      ...prev,
                      [e.target.name]: Number(
                        extractNumbers(p2e(e.target.value))
                      ).toLocaleString(),
                    }));
                  }}
                  dir="rtl"
                  type="text"
                  name="amount"
                  className="w-fit h-full px-3 py-2 caret-blue-600 rounded-[4px] placeholder:text-gray-500 text-[14px]"
                  placeholder={e2p((1000.0).toLocaleString())}
                />
              </div>
              <span className="text-gray-300 text-xs justify-between flex flex-row p-1">
                موجودی در دسترس شما:
                <span className="text-[#C7C5D0]" dir="ltr">
                  <span className="text-[#777680]">
                    {e2p(Number("1450.62").toLocaleString())}
                  </span>{" "}
                  USDT
                </span>
              </span>
            </div>
          </div>

          {/* calculate section */}
          <div className="flex flex-col items-center justify-start">
            <div className="bg-[#FBFBFB] rounded-[4px] flex flex-col my-2 w-full p-2 text-xs gap-4 text-[12px] font-medium leading-[165%]">
              <div className="flex flex-row">
                <div className="flex-grow flex items-center">
                  <span className="text-[#1B1B21] pe-1">کارمزد معامله</span>
                  <GoInfo />
                </div>
                <span dir="ltr" className="text-[#C7C5D0]">
                  Tether -{" "}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="flex-grow text-[#1B1B21]">
                  مبلغ نهایی واریز
                </span>
                <span dir="ltr" className="text-[#C7C5D0]">
                  Tether -{" "}
                </span>
              </div>
            </div>

            <button
              className="flex-grow leading-[20px] lg:leading-[24px] transition relative duration-300 whitespace-nowrap focus:outline-none flex flex-row items-center justify-center border bg-border select-none cursor-not-allowed py-2 px-4 w-full h-11 bg-[#1570EF] text-[#FFFFFF] mt-6 mb-2 rounded-[4px]"
              disabled
              type="submit"
              form="buy-form"
              aria-label="buy"
              data-testid="buy-button"
            >
              <div className="flex items-center">
                تایید و انتقال به درگاه پرداخت
              </div>
            </button>
          </div>
        </form>
      )}
      {tradeType == "tagged" && (
        <div>
          <div className="my-4">
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio className="!text-[14px]" value={1}>
                  انتقال از طریق شبا (پایا، ساتنا و...)
                </Radio>
                <Radio className="!text-[14px]" value={2}>
                  سپرده به سپرده (فقط بانک ملی)
                </Radio>
              </Space>
            </Radio.Group>
          </div>

          <div className="bg-[#f5f7fb] p-4 rounded-[8px] text-[14px]">
            <p className="mb-6">اطلاعات حساب مقصد و شناسه</p>
            <p className="mb-1 text-[#737687]">شناسه واریز</p>
            <div className="relative">
              <input
                type="text"
                value={"4576888"}
                disabled
                className="rounded-full w-full bg-white text-center py-2 text-[16px]"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <IoCopyOutline />
              </div>
            </div>
            {value == 1 ? (
              <p className="mb-1 mt-6 text-[#737687]">شماره شبا مقصد</p>
            ) : (
              <p className="mb-1 mt-6 text-[#737687]">شماره حساب مقصد</p>
            )}

            <div className="relative">
              <input
                type="text"
                value={
                  value == 1
                    ? "IR ۴۵۷۱ ۴۳۹۸ ۴۳۰۹ ۰۰۰۰ ۱۲۳۴ ۹۹۰۰"
                    : "۲۳۵۱۶۹۴۸۵۲۳۰"
                }
                disabled
                className="rounded-full w-full bg-white text-center py-2 text-[16px]"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <IoCopyOutline />
              </div>
            </div>
            <div className="flex items-center justify-center mb-2 mt-4">
              <p>به نام: نارنج </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center">
              <p className="text-[14px]">مبداهای مجاز برای واریز</p>
              <Link className="text-blue-600 text-[12px]" href={"/user-info"}>
                + افزودن حساب جدید
              </Link>
            </div>
            {value == 2 && (
              <div className="flex flex-row gap-3 text-[#737687] text-[14px] bg-[#e4ecfa] rounded-[4px] my-3 p-2 items-center">
                <GoInfo />
                <p className="">
                  برای انتقال با روش سپرده به سپرده لطفا یک حساب بانک ملی که
                  به‌نام خودتان است اضافه کنید.
                </p>
              </div>
            )}
            {value == 1 ? (
              <ul className="text-[14px] mt-4 divide-y divide-gray-200">
                <li className="flex justify-between items-center py-2">
                  <div>بانک پارسیان</div>
                  <div>IR ۲۳۸۷ ۹۸۰۰ ۱۱۲۰ ۰۰۰۰ ۸۵۴۲ ۰۰۰۰</div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div>بانک پارسیان</div>
                  <div>IR ۲۳۸۷ ۹۸۰۰ ۱۱۲۰ ۰۰۰۰ ۸۵۴۲ ۰۰۰۰</div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div>بانک پارسیان</div>
                  <div>IR ۲۳۸۷ ۹۸۰۰ ۱۱۲۰ ۰۰۰۰ ۸۵۴۲ ۰۰۰۰</div>
                </li>
              </ul>
            ) : (
              <ul className="text-[14px] mt-4 divide-y divide-gray-200">
                <li className="flex justify-between items-center py-2">
                  <div>بانک ملی</div>
                  <div>۲۳۵۱۶۹۴۸۵۲۳۰</div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div>بانک ملی</div>
                  <div>۲۳۵۱۶۹۴۸۵۲۳۰</div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div>بانک ملی</div>
                  <div>۲۳۵۱۶۹۴۸۵۲۳۰</div>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositBox;
