import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Card() {
  const url = "https://ats-app-cap.herokuapp.com/jobs";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data.data));
  }, []);

  return (
    <>
      <section
        className="container-2xl border-solid rounded-3xl my-12 mx-12 h-96 bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
      >
        <div className="flex flex-col justify-center text-center items-center h-full">
          <h2 className="text-white text-2xl font-medium ">Welcome to</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-3">
            CELERATES
          </h1>
        </div>
      </section>
      {/* Insert Filter Job */}

      <section class="container">
        <div className="justify-around flex">
          <table className="leading-normal table-auto text-sm text-gray-500 flex-row flex-[100vh] font-[Poppins]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center  ">
              <tr>
                <th className="px-6 py-3">Title</th>
                {/* <th className="px-6 py-3">Description</th> */}
                <th className="px-6 py-3">Company</th>
                {/* <th className="px-6 py-3">Location</th> */}
                {/* <th className="px-6 py-3">Salary</th> */}
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Experience Level</th>
                {/* <th className="px-6 py-3">Skills</th> */}
                <th className="px-6 py-3">Valid Until</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((company) => (
                <tr
                  // key={index}
                  className="bg-white border-b hover:bg-gray-50 text-center"
                >
                  <td className="px-6 py-4 font-medium"> {company.title} </td>

                  <td className="px-6 py-4">
                    {/* {shortenText(res.job_qualification, 10)} */}
                    {company.company_name}
                  </td>

                  <td className="px-6 py-4">
                    {/* {jobStatus(res.job_status)} */}
                    {company.type}
                  </td>
                  <td className="px-6 py-4">{company.level_of_experience}</td>

                  <td className="px-6 py-4">{company.date_end}</td>

                  <td className="px-6 py-4">
                    <Link to="/user/jobs/jobId">
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
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Card;
