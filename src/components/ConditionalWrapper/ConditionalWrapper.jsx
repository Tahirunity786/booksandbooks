'use client';

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import SideBar from "../Sidebar/SideBar";


export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();

  // Routes where Navbar and Footer should be hidden
  const hideNavbarRoutes = ["/404", "/login", "/register", '/register/continue', "/forgot-password", "/reset-password"];
  const hideSideBarRoutes = ["/404", "/login", "/register", '/shop', "/forgot-password", "/reset-password"];

  // Determine visibility
  const showNavbar = !hideNavbarRoutes.includes(pathname);
  const showSideBar = !hideSideBarRoutes.includes(pathname);
  const isLogo = pathname === '/shop' ? 'none':'flex';

  return (
    <>
      {/* Conditional Navbar Rendering */}
      {showNavbar && (<Navbar
      isLogo={isLogo}
      />)}
      {showSideBar && <SideBar />}
      {/* Main Content */}
      {children}
      {/* Conditional SideBar Rendering */}
    </>
  );
}
