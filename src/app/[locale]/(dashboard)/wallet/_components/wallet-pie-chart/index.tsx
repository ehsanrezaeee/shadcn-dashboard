import React from "react";

// next dep
import dynamic from "next/dynamic";

// icons
import { History } from "lucide-react";
import Link from "next/link";

// Dynamically import the Pie component
const Pie = dynamic(() => import("@ant-design/plots").then((mod) => mod.Pie), {
  loading: () => <p>Loading Pie chart...</p>,
  ssr: false,
});

const WalletPieChartBox = () => {
  const config = {
    data: [
      { type: "USDC", value: 16, color: "#3148F814" },
      { type: "USDT", value: 18, color: "#9AA5FC" },
      { type: "SHIBA", value: 24, color: "#3148F8" },
      { type: "Tether", value: 42, color: "#293CCE" },
    ],
    angleField: "value",
    paddingRight: 0,
    marginRight: 0,
    paddingLeft: 0,
    marginLeft: 0,
    innerRadius: 0.5,
    label: false,
    legend: false,
    annotations: false,
    tooltip: false,
    colorField: "type",
    style: {
      fill: ({ color }: { color: string }) => {
        return color;
      },
    },
  };

  return (
    <div className="col-span-12 lg:col-span-7 rounded-[4px] bg-white h-56 p-6">
      <div className="h-9 w-full flex items-center justify-between">
        <span className="text-[16px] font-medium text-[#424655]">پراکندگی</span>
        <Link
          href={"/wallet/history"}
          className="h-full flex items-center justify-center gap-1 px-3 py-[4px] border border-[#1570EF] rounded-[4px]"
        >
          <History />
          <span className="text-[#1570EF] text-[14px] font-medium">
            تاریخچه
          </span>
        </Link>
      </div>
      <div className="h-28 w-full flex items-center justify-between mt-3">
        {/* @ts-ignore */}
        <Pie className="w-40 h-40 mt-[-4px]" {...config} />

        <div className="w-[calc(100%-160px)] h-full grid grid-cols-12 gap-x-8 ms-12">
          <div className="col-span-6 py-2 grid grid-cols-12 content-start gap-y-[4px]">
            <div className="col-span-12 h-9 px-2 flex items-center bg-[#FBFBFB] rounded-[4px] justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
            <div className="col-span-12 h-9 px-2 flex items-center justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
            <div className="col-span-12 h-9 px-2 flex items-center bg-[#FBFBFB] rounded-[4px] justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
          </div>
          <div className="col-span-6 py-2 grid grid-cols-12 content-start gap-y-[4px]">
            <div className="col-span-12 h-9 px-2 flex items-center justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
            <div className="col-span-12 h-9 px-2 flex items-center bg-[#FBFBFB] rounded-[4px] justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
            <div className="col-span-12 h-9 px-2 flex items-center justify-between">
              <span className="w-[15px] h-[15px] bg-[#293CCE] rounded-full"></span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-start mt-[2px]">
                Tether
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#C7C5D0] w-[calc(55%-15px)] flex items-center justify-start">
                تتر
              </span>
              <span className="text-[12px] font-normal leading-[165%] text-[#46464F] w-[calc(25%-15px)] flex items-center justify-end">
                ۳۰٪
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPieChartBox;
