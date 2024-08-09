"use client";

import AntModal from "@/components/common/modals/AntModal";
import React from "react";

const RemoveCardModal = ({
  open,
  setOpen,
  removeCard,
}: {
  open: any;
  setOpen: any;
  removeCard: any;
}) => {
  return (
    <AntModal
      title={
        <div className="flex flex-row flex-nowrap items-center justify-start">
          <span className="text-[#545454]">حذف کارت بانکی</span>
        </div>
      }
      CTA_button_modal={[
        {
          text: "حذف کارت",
          action: () => {
            removeCard();
            setOpen(false);
          },
          className:
            "!border-[#00cec9] border-2 bg-transparent !text-[#00cec9]",
        },
        {
          text: "انصراف",
          action: () => {
            setOpen(false);
          },
          className: "!bg-[#00cec9] border-[#00cec9]",
        },
      ]}
      open={open}
      setOpen={setOpen}
    >
      <div>آیا می خواهید کارت بانکی خود را حذف کنید؟</div>
    </AntModal>
  );
};

export default RemoveCardModal;
