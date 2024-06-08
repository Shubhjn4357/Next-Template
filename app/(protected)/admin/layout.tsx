// import Header from "@/components/dashboard/Header";
// import Sidebar from "@/components/dashboard/Sidebar";
import Breadcrumb from "@/components/admin/breadcrumb";
import Header from "@/components/admin/dashboardHeader";
import Sidebar from "@/components/admin/dashboardSidebar";
import Tabs from "@/components/admin/tabs";
import { currentRole } from "@/lib/auth";
import React from "react";
interface AdminProps {
  children: React.ReactNode;
}
const AdminLayout = async ({ children }: AdminProps) => {
  const role = await currentRole();
  if (role !== "ADMIN") {
    return <div className="d-center h-dvh">You are not Admin</div>;
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Sidebar />
      <div className="flex flex-col h-full sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        {children}
       </div>
    </div>
  );
};
AdminLayout.auth = {
  role: "ADMIN",
  redirect: "/",
  loading: "loading...",
};
export default AdminLayout;
