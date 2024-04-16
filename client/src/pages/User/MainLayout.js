import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/User/Header";
import Footer from "../../components/User/Footer";
import LoginForm from "../../components/User/LoginForm";

const MainLayout = () => {
  return (
    <div className="bg-[#f5f9ff]">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
