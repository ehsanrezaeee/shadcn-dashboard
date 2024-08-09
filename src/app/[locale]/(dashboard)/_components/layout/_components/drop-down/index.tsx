import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Link } from "./../../../../../../../navigation";
import { CircleUser } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const DropDownComponent = ({
  open,
  setOpen,
  side,
}: {
  open: any;
  setOpen: any;
  side?: "top" | "bottom" | "left" | "right" | undefined;
}) => {
  const t = useTranslations("Dashboard");
  const locale = useLocale();
  return (
    <DropdownMenu dir={locale == "fa" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side={side}>
        <DropdownMenuLabel>{t("account")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{t("settings")}</DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/profile"}>{t("profile")}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setOpen(!open);
          }}
        >
          {t("exit")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownComponent;
