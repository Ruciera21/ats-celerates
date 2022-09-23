import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function LayoutAdmin({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

export default LayoutAdmin;
