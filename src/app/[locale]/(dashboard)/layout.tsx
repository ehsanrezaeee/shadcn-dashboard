// main dashboard layout component

import Alignment from "@/hooks/Alignment";
import { MainLayout } from "./_components/layout";

type Props = {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
};

export default async function DashboardLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <Alignment>
      <MainLayout>{children}</MainLayout>
    </Alignment>
  );
}
