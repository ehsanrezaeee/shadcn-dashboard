import React from "react";

// icons
import { Magnet } from "lucide-react";

// antd
import { Table, Input, Switch } from "antd";

// types
import { WalletAmountsDataType } from "../../types";

// table creator
import { columnsTable } from "../../utils/columnsTable";

// data
import walletFundsData from "../../static/walletFunds.json";

const data: WalletAmountsDataType[] = walletFundsData;

const WalletTable = () => {
  // table columns
  const columns = columnsTable();

  return (
    <div className="col-span-12 rounded-[4px] bg-white grid grid-cols-12 content-start">
      <div className="col-span-12 flex items-center justify-between p-6 h-20 my-0">
        <div className="text-[16px] font-medium text-[#424655]">
          لیست دارایی ها
        </div>
        <div className="flex items-center justify-normal gap-x-6">
          <div className="flex items-center leading-[170%] gap-2">
            <Switch defaultChecked onChange={() => {}} />
            <span className="text-[#46464F] font-normal text-[14px]">
              فقط نمایش دارایی‌های من
            </span>
          </div>
          <Input
            style={{ width: 207 }}
            placeholder="جستجو..."
            prefix={<Magnet />}
          />
        </div>
      </div>

      <div className="col-span-12 px-6">
        {/* @ts-ignore */}
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={{ position: ["none", "none"] }}
          // @ts-ignore
          onRow={(record: WalletAmountsDataType, index: number) => ({
            style: {
              background: index % 2 === 0 ? "#FFFFFF" : "#FBFBFB",
            },
          })}
        />
      </div>
    </div>
  );
};

export default WalletTable;
