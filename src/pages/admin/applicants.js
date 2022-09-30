import React from "react";
import { Link } from "react-router-dom";

const Applicants = () => {
  return (
    <div>
      <section>
        <div className="container ml-12 font-[Poppins]">
          <table className=" leading-normal table-auto text-sm text-left text-gray-500">
            <tbody>
              <tr
                // key={index}
                className="bg-white border-b hover:bg-gray-50 text-center"
              >
                <td className="px-6 py-4"> Name </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_description, 10)} */}
                  Role
                </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_qualification, 10)} */}
                  Applied On
                </td>
                <td className="px-6 py-4">
                  <Link to="/admin/applicant/applicantId">
                    <button
                      // onClick={handleEdit}
                      // value={res.id}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Applicants;
