import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "./../../../../../../../navigation";
import { NavItems } from "@/lib/sidenavConfig";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const MobileMenu = () => {
  const navItems = NavItems();
  const pathname = usePathname();
  const t = useTranslations("Dashboard");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={pathname.includes("/en") ? "left" : "right"}
        className="flex flex-col"
      >
        <nav className="grid gap-2 text-lg font-medium">
          <SheetClose>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">Steach Inc</span>
            </Link>{" "}
          </SheetClose>

          {navItems.map((item) => {
            return (
              <SheetClose asChild key={item.name + item.position}>
                <Link
                  href={item.href}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  {item.icon}
                  {t(item.name)}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
