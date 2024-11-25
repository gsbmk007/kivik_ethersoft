import Bottombar from "@/components/ui/shared/bottombar";
import Leftsidebar from "@/components/ui/shared/leftsidebar";
import { Outlet } from "react-router-dom";
import Topbar from "@/components/ui/shared/topbar";
import React from "react";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <Leftsidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;
