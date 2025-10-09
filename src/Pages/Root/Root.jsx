import React from "react";
import Nav from "../../Components/NavBar/Nav";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Root;
