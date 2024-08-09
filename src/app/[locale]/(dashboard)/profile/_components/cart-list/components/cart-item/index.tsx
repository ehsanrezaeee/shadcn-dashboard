"use client";

// import basic dep
import React, { FC, useEffect, useState } from "react";

// import type of props
import { BankAccount, BankTypes } from "../../types";

// style
import classes from "./style.module.css";

// bank data
import { banks } from "@/lib/detect-bank";

// icon
import { IoTrashOutline } from "react-icons/io5";

// card number
import { numToCardNum, e2p, numToCardNumEn } from "@/lib/utils";

// lang hook
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import Cookies from "js-cookie";
import RemoveCardModal from "../../../remove-card-modal";

const WalletListItem: FC<{ item: BankAccount; refetch: any }> = ({
  item,
  refetch,
}) => {
  // provider bank data
  const [selectedBank, setSelectedBank] = useState<BankTypes | null>();
  const [open, setOpen] = useState(false);

  // lang hook
  const locale = useLocale();
  const gt = useTranslations("Global");

  const token = Cookies.get("CTA1");

  useEffect(() => {
    const matchingCardNo = banks.find(
      (bank) => bank.card_no === parseInt(item.card_number.slice(0, 6))
    );

    if (matchingCardNo) {
      setSelectedBank(matchingCardNo);
    } else {
      setSelectedBank(null);
    }
  }, [item]);

  const removeCardHandler = async (id: string, refetch: any) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/bank-accounts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    refetch();
    if (res?.data.base.message == "OK") {
      toast.success("کارت شما با موفقیت حذف گردید", {
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
    } else if (res?.data.base.status == 500) {
      toast.error("امکان حذف کارت شما وجود ندارد", {
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
    }
  };

  return (
    <tr className="m-2 md:m-0 cursor-pointer md:hover:bg-[#F6F7FA] md:hover:rounded-2xl md:border-b border-[#DDDDDD] last:border-b-0">
      {/* sheba number section */}
      <td className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-text-secondary hidden md:table-cell h-[48px] md:h-[88px] w-full md:w-auto border-none last:md:pl-2 first:md:pr-2">
        <div className="flex justify-start !text-sm">
          <span className="whitespace-nowrap" data-testid="growth">
            <span
              className={`text-[12px] leading-6 md:text-[14px] md:leading-[24px] font-medium mt-0.5 text-success-main`}
              dir="ltr"
              data-testid="growth_text"
            >
              {locale === "fa" ? e2p(item.iban_number) : item.iban_number}
            </span>
          </span>
        </div>
      </td>

      {/* cart number section */}
      <td className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-text-secondary hidden md:table-cell h-[48px] md:h-[88px] w-full md:w-auto border-none last:md:pl-2 first:md:pr-2">
        <div className="flex justify-start !text-sm">
          <span className="whitespace-nowrap" data-testid="growth">
            <span
              className={`text-[12px] leading-6 md:text-[14px] md:leading-[24px] font-medium mt-0.5 text-success-main`}
              dir="ltr"
              data-testid="growth_text"
            >
              {locale === "fa"
                ? numToCardNum(item?.card_number as any)
                : numToCardNumEn(item?.card_number as any)}
            </span>
          </span>
        </div>
      </td>

      {/* BANK */}
      <td className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-text-secondary hidden md:table-cell h-[48px] md:h-[88px] w-full md:w-auto border-none last:md:pl-2 first:md:pr-2">
        <div className="flex">
          <div className="w-[90px] md:w-[140px] h-16 flex flex-row gap-3 p-2">
            <span
              className={`${classes["locked-amount-span"]} text-[14px] !flex items-center p-2 gap-4`}
            >
              {locale === "fa"
                ? selectedBank?.bank_title
                : `${selectedBank?.bank_name}`}
            </span>
            <Image
              src={selectedBank?.bank_logo as string}
              width={40}
              height={40}
              alt={"bank image"}
            />
          </div>
        </div>
      </td>

      {/* cta delete */}
      <td className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-text-secondary hidden md:table-cell h-[48px] md:h-[88px] w-full md:w-auto border-none last:md:pl-2 first:md:pr-2">
        <div className="flex justify-start items-center">
          <div className="relative w-[60px] md:w-[88px] h-8 flex items-center">
            <p
              className={`text-[14px] leading-[20px] font-medium flex items-center text-start self-center text-error-main ${
                item.isActive === "verified" ? "text-green" : "text-[#f00]"
              }`}
            >
              {item.isActive === "verified" ? gt("accepted") : gt("rejected")}
            </p>
          </div>
        </div>
      </td>
      <RemoveCardModal
        open={open}
        setOpen={setOpen}
        removeCard={() => {
          removeCardHandler(item?.id, refetch);
        }}
      />
      <td className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-text-secondary hidden md:table-cell h-[48px] md:h-[88px] w-full md:w-auto border-none last:md:pl-2 first:md:pr-2">
        <div className="flex justify-start">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="relative text-[18px] text-[#ff0000] w-[10px] md:w-[10px] h-8"
          >
            <IoTrashOutline />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WalletListItem;
