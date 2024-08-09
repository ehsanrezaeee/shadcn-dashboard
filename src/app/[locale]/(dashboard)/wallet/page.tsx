"use client";

import React from "react";

// comps
import WalletOverView from "./_components/wallet-overview";
import WalletPieChartBox from "./_components/wallet-pie-chart";
import WalletTable from "./_components/wallet-table";

const Wallet = () => {
  return (
    <div className="col-span-12 overflow-auto flex items-start justify-center">
      <div className="grid grid-cols-12 gap-4 w-full content-start">
        {/* overview box */}
        <WalletOverView />

        {/* pie chart box */}
        <WalletPieChartBox />

        {/* wallet table */}
        <WalletTable />
      </div>
    </div>
  );
};

export default Wallet;
