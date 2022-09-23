import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/white-celerates.svg";
// import ArrowIcon from "../../assets/arrow-forward-circle-outline.svg";

const Sidebar = () => {
  // const [open, isOpen] = useState(false)

  return (
    <>
      <div className="flex">
        {/* aside */}
        <aside
          className="flex w-64 flex-col space-y-2 border-r-2 border-gray-200 bg-slate-900 p-2 text-white h-[100vh]"
          x-show="asideOpen"
        >
          <img src={LogoWhite} className="w-48 h-auto" alt="" />
          <Link
            to="/admin/dashboard"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-home" />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/jobs"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-board" />
            </span>
            <span>Job Board</span>
          </Link>
          <Link
            to="/admin/jobs/form"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-new-job" />
            </span>
            <span>Insert New Job</span>
          </Link>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
