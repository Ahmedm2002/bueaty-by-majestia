import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Search from "../Components/Search/Search";

function Layout() {
  const location = useLocation();
  const hideSearchBar =
    location.pathname === "/aboutUs" || location.pathname === "/contactUs";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        {!hideSearchBar && <Search />}
        <ScrollRestoration />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
