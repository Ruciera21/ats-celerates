import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/white-celerates.svg";
import "../../../src/hamburgers.css";
// import ArrowIcon from "../../assets/arrow-forward-circle-outline.svg";

const Sidebar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex">
        {/* aside */}
        <aside
          className="flex flex-nowrap h-screen gap-2 w-max flex-col space-y-2 border-r-2 border-gray-200 bg-slate-900 p-2 text-white font-[Poppins] text-sm"
          x-show="asideOpen"
        >
          <div className="flex items-center gap-3 space-x-1 rounded-md px-2 my-3 pt-1 hover:text-blue-600">
            <img src={LogoWhite} className="w-36 h-auto" alt="" />
          </div>
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-1 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[24px]">
              <ion-icon name="podium-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-home" />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/jobs"
            className="flex items-center gap-1 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[24px]">
              <ion-icon name="briefcase-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-board" />
            </span>
            <span>Job Board</span>
          </Link>
          <Link
            to="/admin/jobs/form/create"
            className="flex items-center gap-1 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[24px]">
              <ion-icon name="duplicate-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-new-job" />
            </span>
            <span>Insert New Job</span>
          </Link>

          <div className="flex items-center gap-1 space-x-1 rounded-md px-2 py-3 hover:text-blue-600 hover:cursor-pointer">
            <span className="text-[24px]">
              <ion-icon name="log-out"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-logout" />
            </span>
            <span>Logout</span>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
