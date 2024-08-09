"use client";

import React, { MouseEventHandler, useState } from "react";
import { Button, Modal } from "antd";
// import { ListItem } from "../market-list/types";

const AntModal = ({
  title,
  CTA_button_modal,
  children,
  open,
  setOpen,
}: {
  title: React.ReactNode | string;
  CTA_button_modal: {
    text: string;
    action: Function;
    className: string;
  }[];
  children: React.ReactNode | string;
  open: boolean;
  setOpen: Function;
}) => {
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ direction: "rtl" }}
      footer={
        <div className="flex justify-between items-center gap-x-2 py-2 px-3 dark:border-gray-700 text-center">
          {CTA_button_modal.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={item.action as MouseEventHandler<HTMLButtonElement>}
                className={`py-[10px] px-[14px] w-full text-center flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${item.className}`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="py-4 overflow-y-auto border-t border-[#e5e7eb]">
        {children}
      </div>
    </Modal>
  );
};

export default AntModal;
