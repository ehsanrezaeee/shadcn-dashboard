"use client";

import Image from "next/image";

// Import useState hooks from React
import { useState } from "react";

// antd
import { Select, Tooltip } from "antd";

// utils tool
import { e2p, extractNumbers, p2e } from "@/lib/utils";

// icons
import { GoInfo } from "react-icons/go";

import { IoIosArrowDown } from "react-icons/io";
import SecurityOTP from "../securityOTP";

const WithdrawBox = () => {
  const [selectedCard, setSelectedCard] = useState<any>();
  const [first, setFirst] = useState(true);

  const [tradeInputs, setTradeInputs] = useState<{
    amount: string;
    price: string;
  }>({
    amount: "0",
    price: "0",
  });
  const text = (
    <span dir="rtl" className="">
      <p className="font-semibold mb-1">کارمزد</p>
      شبکه شاپرک، به میزان ۰.۰۲ درصد از مبلغ واریزی (حداقل ۱۲۰ تومان و حداکثر
      ۴,۰۰۰ تومان) را به عنوان کارمزد واریز، از مبلغ تراکنش کسر کرده و مابقی به
      حساب شما در استیچ خواهد نشست.
    </span>
  );
  return (
    <div>
      {first && (
        <div className="rounded-[8px] bg-white w-full p-3 flex flex-col">
          <p className="my-2 text-[16px]">برداشت تومانی</p>
          <form autoComplete="off" className="w-full">
            {/* select crypto section */}
            <div className="mb-4">
              <div className="w-full">
                <p className="leading-[16px] text-[16px] text-right font-medium text-[#1B1B21] mt-6 mb-2">
                  کارت بانکی مقصد
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
                  مقدار برداشت{" "}
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
                    <Tooltip placement="topRight" title={text}>
                      <GoInfo />
                    </Tooltip>
                  </div>
                  <span dir="ltr" className="text-[#C7C5D0]">
                    Tether -{" "}
                  </span>
                </div>
                <div className="flex flex-row">
                  <span className="flex-grow text-[#1B1B21]">
                    مبلغ نهایی برداشت
                  </span>
                  <span dir="ltr" className="text-[#C7C5D0]">
                    Tether -{" "}
                  </span>
                </div>
              </div>

              <button
                className="flex-grow leading-[20px] lg:leading-[24px] transition relative duration-300 whitespace-nowrap focus:outline-none flex flex-row items-center justify-center border bg-border select-none cursor-not-allowed py-2 px-4 w-full h-11 bg-[#1570EF] text-[#FFFFFF] mt-6 mb-2 rounded-[4px]"
                disabled={!first}
                type="submit"
                form="buy-form"
                aria-label="buy"
                data-testid="buy-button"
                onClick={() => {
                  setFirst(false);
                }}
              >
                <div className="flex items-center">تایید و برداشت</div>
              </button>
            </div>
          </form>
        </div>
      )}
      {!first && <SecurityOTP />}
    </div>
  );
};

export default WithdrawBox;
