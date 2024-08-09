// antd imports
import type { GetProp, TableProps } from "antd";

// user type
import { HistoryDataType } from "../types";

// utils function
import { e2p, numToCardNumEn } from "@/lib/utils";

type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

export const columnsTable = (
  tabColumns: string
): ColumnsType<HistoryDataType> => {
  switch (tabColumns) {
    case "deposit-irt":
      return [
        {
          title: "تاریخ",
          dataIndex: "created_at",
          key: "created_at",
          render: (value: string) => {
            return (
              <div className="flex flex-col justify-center items-start text-[12px] font-medium leading-[165%]">
                <span className="text-[#777680]">
                  {new Date(Number(value)).toLocaleTimeString("fa-IR")} -{" "}
                  {new Date(Number(value)).toLocaleDateString("fa-IR")}
                </span>
              </div>
            );
          },
        },
        {
          title: "مقدار",
          dataIndex: "amount",
          key: "amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#46464F]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "کارمزد",
          dataIndex: "fee_amount",
          key: "fee_amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "نوع واریز",
          key: "type",
          // responsive: ["lg"],
          render: (record: HistoryDataType) => {
            return (
              <span className="text-[#737687]">
                {record?.type_en || record?.type_fa}
              </span>
            );
          },
        },
        {
          title: "شماره کارت",
          dataIndex: "card_number",
          key: "card_number",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {e2p(numToCardNumEn(value)).replaceAll("-", " ")}
              </span>
            );
          },
        },
        {
          title: "کد رهگیری",
          dataIndex: "peigiri_code",
          key: "peigiri_code",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {e2p(value)}
              </span>
            );
          },
        },
        {
          title: "وضعیت",
          dataIndex: "status",
          key: "status",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <div className="inline-block">
                <div className="flex items-center justify-start gap-1 px-2 py-[2px] border border-[#B8B9C1] rounded-[6px] self-stretch">
                  <span
                    className={`w-[6px] h-[6px] rounded-full ${
                      ["موفق", "موفق"].includes(value)
                        ? "bg-[#299054]"
                        : "bg-[#CF3336]"
                    }`}
                  ></span>
                  <span>{value}</span>
                </div>
              </div>
            );
          },
        },
      ];
    case "withdraw-irt":
      return [
        {
          title: "تاریخ",
          dataIndex: "created_at",
          key: "created_at",
          render: (value: string) => {
            return (
              <div className="flex flex-col justify-center items-start text-[12px] font-medium leading-[165%]">
                <span className="text-[#777680]">
                  {new Date(Number(value)).toLocaleTimeString("fa-IR")} -{" "}
                  {new Date(Number(value)).toLocaleDateString("fa-IR")}
                </span>
              </div>
            );
          },
        },
        {
          title: "مقدار",
          dataIndex: "amount",
          key: "amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#46464F]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "کارمزد",
          dataIndex: "fee_amount",
          key: "fee_amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "مقدار پرداخت شده",
          key: "deposit_amount",
          dataIndex: "deposit_amount",
          // responsive: ["lg"],
          render: (value: string) => {
            return (
              <span className="text-[#737687]">
                {" "}
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "شماره شبا",
          dataIndex: "shaba_number",
          key: "shaba_number",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {e2p(value)}
              </span>
            );
          },
        },
        {
          title: "کد رهگیری",
          dataIndex: "peigiri_code",
          key: "peigiri_code",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {e2p(value)}
              </span>
            );
          },
        },
        {
          title: "وضعیت",
          dataIndex: "status",
          key: "status",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <div className="inline-block">
                <div className="flex items-center justify-start gap-1 px-2 py-[2px] border border-[#B8B9C1] rounded-[6px] self-stretch">
                  <span
                    className={`w-[6px] h-[6px] rounded-full ${
                      ["موفق", "موفق"].includes(value)
                        ? "bg-[#299054]"
                        : "bg-[#CF3336]"
                    }`}
                  ></span>
                  <span>{value}</span>
                </div>
              </div>
            );
          },
        },
      ];
    case "deposit-coin":
      return [
        {
          title: "تاریخ",
          dataIndex: "created_at",
          key: "created_at",
          render: (value: string) => {
            return (
              <div className="flex flex-col justify-center items-start text-[12px] font-medium leading-[165%]">
                <span className="text-[#777680]">
                  {new Date(Number(value)).toLocaleTimeString("fa-IR")} -{" "}
                  {new Date(Number(value)).toLocaleDateString("fa-IR")}
                </span>
              </div>
            );
          },
        },
        {
          title: "نام",
          dataIndex: "name",
          key: "name",
          // responsive: ["lg"],
          render: (value) => {
            return <span className="text-[#777680]">{value}</span>;
          },
        },
        {
          title: "مقدار",
          dataIndex: "amount",
          key: "amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#46464F]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "نوع واریز",
          key: "type",
          // responsive: ["lg"],
          render: (record: HistoryDataType) => {
            return (
              <span className="text-[#737687]">
                {record?.type_en || record?.type_fa}
              </span>
            );
          },
        },
        {
          title: "شبکه",
          dataIndex: "network",
          key: "network",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {value}
              </span>
            );
          },
        },
        {
          title: "TXID",
          dataIndex: "tx_id",
          key: "tx_id",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {value}
              </span>
            );
          },
        },
        {
          title: "وضعیت",
          dataIndex: "status",
          key: "status",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <div className="inline-block">
                <div className="flex items-center justify-start gap-1 px-2 py-[2px] border border-[#B8B9C1] rounded-[6px] self-stretch">
                  <span
                    className={`w-[6px] h-[6px] rounded-full ${
                      ["موفق", "موفق"].includes(value)
                        ? "bg-[#299054]"
                        : "bg-[#CF3336]"
                    }`}
                  ></span>
                  <span>{value}</span>
                </div>
              </div>
            );
          },
        },
      ];
    case "withdraw-coin":
      return [
        {
          title: "تاریخ",
          dataIndex: "created_at",
          key: "created_at",
          render: (value: string) => {
            return (
              <div className="flex flex-col justify-center items-start text-[12px] font-medium leading-[165%]">
                <span className="text-[#777680]">
                  {new Date(Number(value)).toLocaleTimeString("fa-IR")} -{" "}
                  {new Date(Number(value)).toLocaleDateString("fa-IR")}
                </span>
              </div>
            );
          },
        },
        {
          title: "نام",
          dataIndex: "name",
          key: "name",
          // responsive: ["lg"],
          render: (value) => {
            return <span className="text-[#777680]">{value}</span>;
          },
        },
        {
          title: "مقدار",
          dataIndex: "amount",
          key: "amount",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#46464F]">
                {Number(value) != 0
                  ? e2p(Number(value).toLocaleString())
                  : " - "}
              </span>
            );
          },
        },
        {
          title: "شبکه",
          dataIndex: "network",
          key: "network",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {value}
              </span>
            );
          },
        },
        {
          title: "آدرس مقصد",
          dataIndex: "to",
          key: "to",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#737687]" dir="ltr">
                {value}
              </span>
            );
          },
        },
        {
          title: "TXID",
          dataIndex: "tx_id",
          key: "tx_id",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <span className="text-[#777680]" dir="ltr">
                {value}
              </span>
            );
          },
        },
        {
          title: "وضعیت",
          dataIndex: "status",
          key: "status",
          // responsive: ["lg"],
          render: (value) => {
            return (
              <div className="inline-block">
                <div className="flex items-center justify-start gap-1 px-2 py-[2px] border border-[#B8B9C1] rounded-[6px] self-stretch">
                  <span
                    className={`w-[6px] h-[6px] rounded-full ${
                      ["موفق", "موفق"].includes(value)
                        ? "bg-[#299054]"
                        : "bg-[#CF3336]"
                    }`}
                  ></span>
                  <span>{value}</span>
                </div>
              </div>
            );
          },
        },
      ];
    default:
      return [];
  }
};
