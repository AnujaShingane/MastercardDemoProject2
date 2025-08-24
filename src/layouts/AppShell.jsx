import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import Toast from "../components/Toast";
import MenuBox from "../components/MenuBox";

export default function AppShell() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const onHome = loc.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenu={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className={`${onHome ? "" : "pt-28"} flex-1`}>
        {onHome ? (
          <Outlet />
        ) : (
          <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
            <Outlet />
          </main>
        )}
      </div>

      <Footer />
      <Chatbot />
      <Toast />
      <MenuBox onOpen={() => setOpen(true)} />
    </div>
  );
}