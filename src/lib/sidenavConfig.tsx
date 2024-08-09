import { usePathname } from "next/navigation";

import {
  BarChart,
  Layers,
  HelpCircle,
  Home,
  Settings2,
  CheckCheck,
  Calendar,
  Wallet,
} from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "dashboard",
      href: "/dashboard",
      icon: <Home size={20} />,
      active: pathname.includes("/dashboard"),
      position: "top",
    },
    {
      name: "analytics",
      href: "/notifications",
      icon: <BarChart size={20} />,
      active: isNavItemActive(pathname, "/analytics"),
      position: "top",
    },
    {
      name: "courses",
      href: "/courses",
      icon: <Layers size={20} />,
      active: isNavItemActive(pathname, "/courses"),
      position: "top",
    },
    {
      name: "financial",
      href: "/financial",
      icon: <Wallet size={20} />,
      active: isNavItemActive(pathname, "/financial"),
      position: "top",
    },
    {
      name: "testBuilder",
      href: "/test-builder",
      icon: <CheckCheck size={20} />,
      active: isNavItemActive(pathname, "/test-builder"),
      position: "top",
    },
    {
      name: "calendar",
      href: "/calendar",
      icon: <Calendar size={20} />,
      active: isNavItemActive(pathname, "/calendar"),
      position: "top",
    },
    {
      name: "settings",
      href: "/settings",
      icon: <Settings2 size={20} />,
      active: isNavItemActive(pathname, "/settings"),
      position: "bottom",
    },
    {
      name: "support",
      href: "/support",
      icon: <HelpCircle size={20} />,
      active: isNavItemActive(pathname, "/support"),
      position: "bottom",
    },
  ];
};
