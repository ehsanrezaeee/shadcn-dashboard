"use client";

import { useState } from "react";

import Image from "next/image";

import { Link } from "@/navigation";

import { useTranslations } from "next-intl";

import { Search, LifeBuoy, SquareUser } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { NavItems } from "@/lib/sidenavConfig";

import LocaleSwitcher from "@/components/common/LocaleSwitcher";

import AntModalDashboardLogout from "./_components/layoutModal";

import { DarkMode } from "./_components/darkMode";
import DropDownComponent from "./_components/drop-down";
import MobileMenu from "./_components/mobile-menu";
import DesktopSidebar from "./_components/desktop-sidebar";

import { Button } from "@/components/ui/button";

type Props = {
  readonly children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const [open, setOpen] = useState(false);
  const navItems = NavItems();

  const t = useTranslations("Dashboard");

  return (
    <div className="flex flex-row">
      <aside className="hidden inset-y z-20 md:flex w-14 flex-col border-x lg:hidden max-h-screen sticky top-0">
        <div className="flex flex-col">
          <div className="border-b h-14 p-2 lg:h-[60px]">
            <Link
              href="/"
              className="flex flex-row items-center justify-center gap-2 font-semibold"
            >
              <Image
                src={"/images/Steach-logo-small.svg"}
                height={100}
                width={100}
                alt="logo"
              />
            </Link>
          </div>
          <nav className="flex flex-col gap-1 p-2">
            <TooltipProvider>
              {navItems.map((item) => {
                return (
                  <Tooltip key={item.name + item.href}>
                    <TooltipTrigger asChild>
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center h-10 gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted ${item.active && "bg-muted"
                          }`}
                      >
                        {item.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                        {t(item.name)}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </nav>
        </div>
        <nav className="mt-auto grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <DesktopSidebar />
        <div className="flex flex-col">
          {/* <header className="flex h-14 items-center gap-4 border-b bg-bgColor-quaternary-light px-4 lg:h-[60px] lg:px-6 sticky top-0">
            <MobileMenu />
            <div className="w-full flex-1">
              <p className="text-2xl font-bold">Welcome Bro!</p>
            </div>
            <LocaleSwitcher />
            <DarkMode />
            <DropDownComponent open={open} setOpen={setOpen} />
            <AntModalDashboardLogout open={open} setOpen={setOpen} />
          </header> */}
          <main className="flex flex-1 flex-col gap-4p pt-4 lg:gap-6 lg:pt-6">
            <div
              className="grid grid-cols-12 h-full items-center justify-center border border-solid border-[#EAECF0] rounded-tl-[40px] p-8 border-b-0 border-r-0"
              x-chunk="dashboard-02-chunk-1"
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
