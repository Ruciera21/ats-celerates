import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Applied from "../../assets/icon_applied.png";
import AllJobs from "../../assets/icon_all.png";
import Sidebar from "../../components/Sidebar";
// import Footer from '../../components/Footer';

const Dashboard = () => {
  return (
    <div className="flex items-start justify-between">
      <Sidebar />
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <section className="box-border mb-5">
          <div className="flex relative flex-row gap-8 md:gap-40 justify-center text-center items-center font-[Poppins]">
            <div className="bg-gray-300 -z-50 border-solid box-border flex flex-col items-center md:box-content rounded-2xl w-1/3 h-1/2">
              <img src={AllJobs} alt="" className="w-32" />
              <h1 className="my-2 text-6xl font-semibold">420</h1>
              <h1 className="mb-4 text-l">All jobs</h1>
            </div>
            <div className="bg-gray-300 -z-50 border-solid flex flex-col box-border items-center md:box-content rounded-2xl w-1/3 h-1/3 ">
              <img src={Applied} alt="" className="w-32" />
              <h1 className="my-2 text-6xl font-semibold">69</h1>
              <h2 className="mb-4 text-l">Applied</h2>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Dashboard;
