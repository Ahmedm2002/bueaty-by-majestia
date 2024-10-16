import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Search from "../Components/Search/Search";

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
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
