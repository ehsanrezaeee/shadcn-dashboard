// antd imports
import type { GetProp, TableProps } from "antd";

// user type
import { WalletAmountsDataType } from "../types";

// utils function
import { e2p } from "@/lib/utils";

type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

export const columnsTable = (): ColumnsType<WalletAmountsDataType> => {
  return [
    {
      title: "دارایی",
      key: "name",
      render: (record: WalletAmountsDataType) => {
        return (
          <div className="flex items-center justify-start gap-x-2">
            <span className="w-8 h-8 bg-[#1570EF] block rounded-full"></span>
            <div className="flex flex-col justify-center items-start text-[12px] font-medium leading-[165%]">
              <span className="text-[#000000D6]">{record.en_name}</span>
              <span className="text-[#00000052]">{record.fa_name}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "موجودی کل",
      dataIndex: "amount",
      key: "amount",
      // responsive: ["lg"],
      render: (value) => {
        return (
          <span className="text-[#46464F]">
            {Number(value) != 0 ? e2p(Number(value).toLocaleString()) : " - "}
          </span>
        );
      },
    },
    {
      title: "فریز شده",
      dataIndex: "freeze_amount",
      key: "freeze_amount",
      // responsive: ["lg"],
      render: (value) => {
        return (
          <span className="text-[#46464F]">
            {Number(value) != 0 ? e2p(Number(value).toLocaleString()) : " - "}
          </span>
        );
      },
    },
    {
      title: "در دسترس",
      dataIndex: "available_amount",
      key: "available_amount",
      // responsive: ["lg"],
      render: (value) => {
        return (
          <span className="text-[#46464F]">
            {Number(value) != 0 ? e2p(Number(value).toLocaleString()) : " - "}
          </span>
        );
      },
    },
    {
      title: "ارزش تخمینی",
      dataIndex: "estimated_amount",
      key: "estimated_amount",
      // responsive: ["lg"],
      render: (value) => {
        return (
          <div className="flex items-center justify-end gap-[2px]" dir="ltr">
            <span className="text-[#46464F]">
              {Number(value) != 0 ? e2p(Number(value).toLocaleString()) : " - "}
            </span>
            {value != 0 && <span className="text-[#0000003D]">IRT</span>}
          </div>
        );
      },
    },
    {
      title: "سود/ضرر (۲۴h)",
      dataIndex: "change",
      key: "change",
      // responsive: ["lg"],
      render: (change) => {
        return (
          <div className="flex flex-col items-start justify-center gap-y-1">
            <div dir="ltr" className="flex gap-[2px]">
              {change.type === "increase" ? "+" : "-"}
              <span className="text-[#46464F]">
                {e2p(Number(change.amount).toLocaleString())}
              </span>
              {change.amount != 0 && (
                <span className="text-[#0000003D]">IRT</span>
              )}
            </div>
            <div
              dir="ltr"
              className={`px-2 py-[2px] text-[11px] font-medium leading-[168%] border 
              ${
                change.type === "increase" ? "bg-[#49978214]" : "bg-[#DC484C14]"
              } 
              ${
                change.type === "increase"
                  ? "border-[#E0F8E9]"
                  : "border-[#FCE4E4]"
              } rounded-full 
              ${
                change.type === "increase" ? "text-[#499782]" : "text-[#DC484C]"
              }  block`}
            >
              {change.type === "increase" ? "+" : "-"}
              {e2p(change.percent)}%
            </div>
          </div>
        );
      },
    },
  ];
};
