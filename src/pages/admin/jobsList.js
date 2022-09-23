import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const JobsList = () => {
  return (
    <div className="flex items-start justify-between">
      <Sidebar />
      <section>
        <div className="container mx-auto ">
          <table className=" leading-normal table-auto text-sm text-left text-gray-500 mx-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Salary</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Experience Level</th>
                <th className="px-6 py-3">Skills</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                // key={index}
                className="bg-white border-b hover:bg-gray-50 text-center"
              >
                <td className="px-6 py-4 font-medium"> role </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_description, 10)} */}
                  Description
                </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_qualification, 10)} */}
                  Company
                </td>
                <td className="px-6 py-4">Location</td>
                <td className="px-6 py-4">Salary</td>
                <td className="px-6 py-4">
                  {/* {jobStatus(res.job_status)} */}
                  Type
                </td>
                <td className="px-6 py-4">Experience</td>
                <td className="px-6 py-4">Skills</td>
                <td className="px-6 py-4">Open / Close</td>

                <td className="flex flex-col px-6 py-4">
                  <Link to="/admin/jobs/jobId">
                    <button
                      // onClick={handleEdit}
                      // value={res.id}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Details
                    </button>
                  </Link>
                  <button
                    // onClick={handleEdit}
                    // value={res.id}
                    className="font-medium text-green-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={handleDelete}
                    // value={res.id}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default JobsList;
