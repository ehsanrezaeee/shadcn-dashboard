"use client";

import React, { useState } from "react";

// antd
import { Table, Segmented } from "antd";

// data types
import { HistoryDataType } from "./types";

// columns table creator
import { columnsTable } from "./utils/columnsTable";

// data
import historyData from "./static/historyData.json";

const data: HistoryDataType[] = historyData;

const HistoryWallet = () => {
  // handle segment tab
  const [tabColumns, setTabColumns] = useState<string>("deposit-irt");

  // table columns
  const columns = columnsTable(tabColumns);

  return (
    <div className="col-span-12 rounded-[4px] bg-white inline-grid grid-cols-12 content-start pb-4">
      <div className="col-span-12 flex flex-col items-start justify-center p-6 my-0 gap-y-4">
        <div className="text-[16px] font-medium text-[#424655]">تاریخچه</div>
        <Segmented
          dir="ltr"
          options={[
            { label: "واریز تومان", value: "deposit-irt" },
            { label: "برداشت تومان", value: "withdraw-irt" },
            { label: "واریز دارایی", value: "deposit-coin" },
            { label: "برداشت دارایی", value: "withdraw-coin" },
          ]}
          value={tabColumns}
          // @ts-ignore
          onChange={setTabColumns}
        />
      </div>

      <div className="col-span-12 px-6">
        {/* @ts-ignore */}
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={{ position: ["none", "none"] }}
          // @ts-ignore
          onRow={(record: HistoryDataType, index: number) => ({
            style: {
              background: index % 2 === 0 ? "#FFFFFF" : "#FBFBFB",
            },
          })}
        />
      </div>
    </div>
  );
};

export default HistoryWallet;
