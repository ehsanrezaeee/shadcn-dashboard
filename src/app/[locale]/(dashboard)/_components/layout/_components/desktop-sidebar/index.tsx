"use client";

import { Link } from "@/navigation";
import { LogOut, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DropDownComponent from "../drop-down";
import { NavItems } from "@/lib/sidenavConfig";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

// static images
import LogoSVG from "#/public/images/logo-light.svg"
import LogoTextSVG from "#/public/images/logo-text-light.svg"

const DesktopSidebar = () => {
  const navItems = NavItems();
  const pathname = usePathname();
  const t = useTranslations("Dashboard");
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#FFFFFF] hidden lg:block">
      <div className="flex h-full max-h-screen flex-col sticky top-0">
        <div className="flex h-14 justify-center items-center px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className="flex flex-row items-center justify-center gap-2 font-semibold"
          >
            {/* <Image
              src={"/images/Steach-logo-white.svg"}
              height={100}
              width={100}
              alt="logo"
            /> */}
            <Image
              src={LogoSVG}
              height={32}
              width={32}
              alt="logo"
            /><Image
              src={LogoTextSVG}
              height={32}
              width={88}
              alt="logo"
            />

          </Link>
        </div>
        <form action="" className="relative px-4 my-2">
          <Search
            className={`absolute ${pathname.includes("/en") ? "left-6" : "right-6"
              } top-2.5 h-4 w-4 text-muted-foreground`}
          />
          <input
            type="text"
            className="bg-[#F9FAFB] p-2 rounded-lg w-full px-8"
            placeholder={t("search")}
          />
        </form>

        <div className="flex-1 mt-2">
          <nav className="grid items-start p-2 text-sm font-medium gap-1">
            {navItems.map((item) => {
              if (item.position == "top") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center h-10 gap-3 rounded-lg px-3 py-2 transition-all text-[#344054] hover:bg-[#F9FAFB] ${item.active && "bg-[#F9FAFB]"
                      }`}
                  >
                    {item.icon}
                    <span className="pt-1">{t(item.name)}</span>
                  </Link>
                );
              }
            })}
          </nav>
        </div>
        <div className="mt-auto">
          <nav className="grid items-start p-2 text-sm font-medium gap-1">
            {navItems.map((item) => {
              if (item.position == "bottom") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center h-10 gap-3 rounded-lg px-3 py-2 transition-all text-[#344054] hover:bg-[#F9FAFB] ${item.active && "bg-[#F9FAFB]"
                      }`}
                  >
                    {item.icon}
                    {t(item.name)}
                  </Link>
                );
              }
            })}
          </nav>

          <div className="my-2 p-2 pt-5 flex justify-between items-center border-t">
            <DropDownComponent
              open={open}
              setOpen={setOpen}
              side={pathname.includes("/en/") ? "right" : "left"}
            />
            <button
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {pathname.includes("/en") ? (
                <LogOut size={20} color="white" />
              ) : (
                <LogOut
                  size={20}
                  color="white"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
