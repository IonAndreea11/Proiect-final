import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { LandingPage } from "./LandingPage";

export default function Layout() {
  return (
    <>
      <Header />
      <LandingPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
