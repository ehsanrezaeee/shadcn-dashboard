"use client";

import AntModal from "@/components/common/modals/AntModal";
import React from "react";
import { handleLogout } from "@/lib/cookieActions";
import Cookies from "js-cookie";

const AntModalDashboardLogout = ({
  open,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) => {
  return (
    <AntModal
      title={
        <div className="flex flex-row flex-nowrap items-center justify-start">
          <span className="text-[#101828]">خروج</span>
        </div>
      }
      CTA_button_modal={[
        {
          text: "خروج",
          action: async () => {
            setOpen(false);
            const reslogout = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/api/v2/auth/logout`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${Cookies.get("CTA1")}`,
                },
                body: JSON.stringify({
                  token_pair: {
                    access_token: Cookies.get("CTA1"),
                    refresh_token: Cookies.get("CTA2"),
                  },
                }),
              }
            );

            handleLogout();
          },
          className:
            "!border-[#101828] border-2 bg-transparent !text-[#101828]",
        },
        {
          text: "انصراف",
          action: () => {
            setOpen(false);
          },
          className: "!bg-[#101828] border-[#101808]",
        },
      ]}
      open={open}
      setOpen={setOpen}
    >
      <div>در حال خروج از داشبورد هستید. برای خروج روی دکمه آن کلیک کنید</div>
    </AntModal>
  );
};

export default AntModalDashboardLogout;
