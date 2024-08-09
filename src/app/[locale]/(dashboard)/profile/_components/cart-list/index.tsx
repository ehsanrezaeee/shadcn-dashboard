"use client";

// bank data
import { banks } from "@/lib/detect-bank";

// import basic dep
import { useState } from "react";

// import types
import { BankAccount, BankTypes } from "./types";

// comps
import ListItemBankCarts from "./components/cart-item";

// icons
import { FiSave } from "react-icons/fi";

// next dep
import Image from "next/image";

// lang hook
import { useLocale, useTranslations } from "next-intl";

// utils func
import { numToCardNum, numToCardNumEn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Cookies from "js-cookie";
import { toast } from "react-toastify";

// set theadItems

const CartsList = () => {
  const [radioNum, setRadioNum] = useState(0);
  const [cartBank, setCartBank] = useState(false);
  const [value, setValue] = useState("");
  const [selectedBank, setSelectedBank] = useState<BankTypes | null>();
  const token = Cookies.get("CTA1");

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["creditCards"],
    queryFn: () =>
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/bank-accounts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          return res.data;
        }),
  });

  // lang hook
  const locale = useLocale();
  const t = useTranslations("Profile");
  const gt = useTranslations("Global");

  const theadItems = [
    t("sheba_number"),
    t("card_number"),
    t("bank"),
    t("status"),
    t("actions"),
  ];

  const formatInputValue = (inputValue: string) => {
    // Remove all non-digits and then add dash after every 4th digit
    return inputValue.replace(/\D+/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(event.target.value);
    setValue(formattedValue);

    // Check if the formatted value matches a card_no in the banks array
    const matchingCardNo = banks.find(
      (bank) =>
        bank.card_no ===
        parseInt(
          formattedValue.split("-").join("").replace(/-/g, "").slice(0, 6)
        )
    );

    if (matchingCardNo) {
      setSelectedBank(matchingCardNo);
    } else {
      setSelectedBank(null);
    }
  };

  const clickHandler = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/bank-accounts`,
      {
        card_number: value.split("-").join("").replace(/-/g, ""),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    refetch();
    setValue("");
    setCartBank(false);
    if (res?.data.base.message == "OK") {
      toast.success("کارت بانکی جدید شما ثبت شد.", {
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
    } else {
      toast.error(
        "افزوده شدن کارت بانکی موفقیت آمیز نبود. لطفا دوباره تلاش کنید. مطمئن شوید کارت بانکی متعلق به خود شماست",
        {
          position: "bottom-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "text-sm",
        }
      );
    }
  };

  return (
    <div className="mt-4 lg:m-0 bg-white flex flex-col w-full lg:max-w-none rounded-xl lg:rounded-2xl mx-auto px-0 overflow-visible shadow-cardPaper">
      <div className="p-4 lg:p-6 flex flex-col text-right w-full relative flex-1 pt-0 lg:pt-0">
        <div className="h-full flex-1 flex-col flex">
          <div className="w-full border-borderLight px-0 flex items-center justify-between mb-4 sticky top-0 pt-4 lg:pt-6 lg:mb-6">
            <div className="flex flex-col">
              <h2 className="text-[#484848] text-[18px] lg:text-[20px] leading-[24px] !font-medium pb-2 w-[95%] flex flex-col items-start justify-start">
                {t("titleBankCardBox")}
              </h2>
              <p
                className={`text-[#6b6b6b] text-[14px] lg:text-[16px] w-[95%] flex items-start justify-start ${
                  locale === "en" ? "text-left" : null
                }`}
              >
                {t("descriptionBankCardBox")}
              </p>
            </div>

            <button
              onClick={() => {
                setCartBank(!cartBank);
              }}
              className="hidden sm:block px-4 py-2 text-[14px] bg-cyan-600 text-white rounded-lg text-nowrap"
            >
              + {t("addBtnTextBankCardBox")}
            </button>
            <button
              onClick={() => {
                setCartBank(!cartBank);
              }}
              className="block sm:hidden px-4 py-2 text-[14px] bg-cyan-600 text-white rounded-lg text-nowrap"
            >
              +
            </button>
          </div>
          {cartBank && (
            <div className="flex flex-col p-2 border border-dashed border-gray-400 rounded-lg">
              <div className="flex flex-row">
                <h2 className="text-[#484848] text-[18px] lg:text-[20px] leading-[24px] !font-medium pb-2 w-[95%] p-2 flex items-start">
                  {t("addBtnTextBankCardBox")}
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-2 items-center">
                <p className="text-[#6b6b6b] text-[14px] lg:text-[16px] w-[95%] p-2 flex items-start">
                  {t("inputCardNumber")}
                </p>
                <input
                  type="text"
                  className="peer py-4 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder={t("card_number")}
                  value={value}
                  onChange={handleChange}
                  maxLength={19}
                />
                {selectedBank ? (
                  <Image
                    src={selectedBank?.bank_logo ?? ""}
                    width={120}
                    height={120}
                    alt="bank"
                  />
                ) : (
                  ""
                )}
                <button
                  onClick={clickHandler}
                  className="px-4 py-2 text-[14px] bg-cyan-600 text-white rounded-lg text-nowrap md:min-w-15 flex flex-nowrap items-center justify-center"
                >
                  {gt("save")}
                  <div className="flex items-center pointer-events-none py-1">
                    <FiSave className={`mx-2 text-[16px]`} />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* desktop */}
          <table className="w-full hidden md:table">
            <thead
              className="flex-nowrap text-start hidden md:table-header-group top-[102px] md:top-[116px] bg-white z-10 mb-6 border-b border-[#DDDDDD]"
              data-testid="table_header"
            >
              <tr>
                {/* read thead items from array "theadItems" */}
                {theadItems.map((itemTitle, index) => {
                  return (
                    <th
                      key={index}
                      className="pt-4 font-normal text-sm text-text-placeholder border-borderLight py-6 first:ps-2 last:pe-2 hidden md:table-cell md:pb-3"
                      data-testid="table_header_cell"
                    >
                      <button className="min-w-auto flex items-center gap-0.5">
                        <div className="flex gap-1 !leading-5">
                          <p className="text-[14px] leading-6 font-medium !text-text-placeholder">
                            {itemTitle}
                          </p>
                        </div>
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="w-full flex flex-col gap-3 md:table-row-group items-center">
              {Array.isArray(data?.result?.bank_accounts) &&
                data?.result?.bank_accounts?.map((item: BankAccount) => {
                  return (
                    <ListItemBankCarts
                      refetch={refetch}
                      item={item}
                      key={item.id}
                    />
                  );
                })}
            </tbody>
          </table>

          {/* mobile */}
          <div className="block md:hidden w-full">
            {Array.isArray(data?.result?.bank_accounts) &&
              data?.result?.bank_accounts.map(
                (item: BankAccount, index: any) => {
                  return (
                    <div
                      key={item.card_number}
                      className="w-full p-3 border-[1px] rounded-[16px] my-3 border-[#e5e7eb]"
                    >
                      <div className="flex flex-nowrap w-full border-b items-center justify-start mb-3">
                        <input
                          type="radio"
                          checked={radioNum == index ? true : false}
                          onChange={() => setRadioNum(index)}
                          className="mb-[3px] me-2"
                        />
                        <h2>
                          {locale === "fa"
                            ? banks.find(
                                (bank) =>
                                  bank.card_no ===
                                  parseInt(item.card_number.slice(0, 6))
                              )?.bank_title
                            : `Bank ${
                                banks.find(
                                  (bank) =>
                                    bank.card_no ===
                                    parseInt(item.card_number.slice(0, 6))
                                )?.bank_name
                              }`}
                        </h2>
                      </div>
                      <div className="flex flex-nowrap w-full items-center justify-between my-2">
                        <p className="text-[12px]">{t("card_number")}</p>
                        <p className="text-[14px]">
                          {locale === "fa"
                            ? numToCardNum(Number(item.card_number))
                            : numToCardNumEn(Number(item.card_number))}
                        </p>
                      </div>
                      <div
                        className={`flex flex-nowrap w-full items-center justify-between my-2`}
                      >
                        <p className="text-[12px]">{t("sheba_number")}</p>
                        <p className="text-[12px]">{item.iban_number}</p>
                      </div>
                      <div className="flex flex-nowrap w-full items-center justify-between my-2">
                        <p className="text-[12px]">{gt("status")}</p>
                        <p
                          className={`text-[14px] ${
                            item.isActive === "verified"
                              ? "text-green"
                              : "text-[#f00]"
                          }`}
                        >
                          {item.isActive === "verified"
                            ? gt("accepted")
                            : gt("rejected")}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsList;
