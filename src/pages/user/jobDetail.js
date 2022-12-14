import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";

const JobDetail = () => {
  let {jobId} = useParams()
  const [data, setData] = useState([])

  const url = `https://ats-app-cap.herokuapp.com/jobs/${jobId}`

  useEffect(() => {
    axios.get(url)
    .then ((res)=>{
      let detail = res.data.data
      setData([detail])
    }).catch((err)=>{
      alert(err)
    })
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="card container mx-auto my-8 py-8 font-[Poppins]">
        {data !== null && (
          <>
          {data.map((res)=>{
            return(
            <>
              <div className="display-content mt-12">
          <div className="flex flex-col">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {res.title}
            </h5>
            {/* <p className="mb-3 font-normal text-gray-700 ">status</p> */}
          </div>
          <div className="flex flex-row flex-wrap gap-60">
            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Company:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">{res.company_name}</p>
            </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Location:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">{res.location}</p>
            </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Salary:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">{res.salary}</p>
            </div>

            <div className="flex flex-col">
              <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Type:
              </h8>
              <p className="mb-3 font-normal text-gray-700 "> {res.type} </p>
            </div>

            {/* <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Tenure:</h8>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_tenure}</p> */}
          </div>

          {/* <div className='flex flex-row flex-wrap gap-60 justify-around'> */}
          <div className="flex flex-col">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Requirements:
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">{res.level_of_experience}</p>
            {/* <p className="mb-3 font-normal text-gray-700 ">skills here</p> */}

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Description:
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">{res.description}</p>
          </div>

          {/* </div> */}
        </div>
            </>
          )})}
          </>
        )}
        

        <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
