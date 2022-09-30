import React from "react";
import Sidebar from "../../components/Sidebar";

const JobForm = () => {
  return (
    <div className="flex items-start justify-between font-[Poppins]">
      <Sidebar />
      <section className="container h-screen ml-12">
        <form className="flex flex-col gap-1 mt-8 ">
          <label className="font-medium text-gray-900">Job Title</label>
          <input type="text" name="title" className="border w-fit" />

          <label className="font-medium text-gray-900">Job Description</label>
          <textarea name="description" className="border w-fit" />

          <label className="font-medium text-gray-900">Company Name</label>
          <input type="text" name="company" className="border w-fit" />

          <label className="font-medium text-gray-900">Location</label>
          <input type="text" name="location" className="border w-fit" />

          <label className="font-medium text-gray-900">Salary</label>
          <input type="number" name="salary" className="border w-fit" />

          <label className="font-medium text-gray-900">Type</label>
          <input type="text" name="type" className="border w-fit" />

          <label className="font-medium text-gray-900">Experience Level</label>
          <input type="text" name="exp" className="border w-fit" />

          <label className="font-medium text-gray-900">Skills</label>
          <input type="text" name="skills" className="border w-fit" />
        </form>

        <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-4">
          Submit
        </button>
      </section>
    </div>
  );
};

export default JobForm;
