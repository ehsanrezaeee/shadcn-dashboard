// global css file
import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Instructor dashboard | Steach Online Learning Platform",
  description: "Steach online learning Platform",
  icons: [
    {
      url: "/images/favicon.ico",
      href: "/images/favicon.ico",
    },
  ],
};

type Props = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
