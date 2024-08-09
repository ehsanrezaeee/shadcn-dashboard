"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useEffect, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

type Props = {
  readonly children: ReactNode;
  readonly defaultValue: string;
  readonly label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as "en" | "fa";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-600 flex flex-row items-center justify-center border border-gray-500 w-fit p-1 rounded-lg",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="flex items-center justify-center appearance-none bg-transparent m-auto text-center visible:ring-0 "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
