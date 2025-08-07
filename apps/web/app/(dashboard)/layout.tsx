import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dasboard-layout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
