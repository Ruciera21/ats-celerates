import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const JobsList = () => {
  const navigate = useNavigate()
  const url = `https://ats-app-cap.herokuapp.com/employees/jobs`

  const [data, setData] = useState([])
  const [input, setInput] = useState({
    title:"", description:"", company_name:"",
    location:"", salary:0, type:"", level_of_experience:""
  })

  const handleEdit = (e) => {
    let jobId = parseInt(e.target.value)
    axios.get(url + `/${jobId}`)
    .then((res)=>{
      navigate(`/admin/jobs/form/edit/${jobId}`)
      let dataEdit = res.data
      setInput({
        title: dataEdit.title, description: dataEdit.description,
        company_name: dataEdit.company_name, location: dataEdit.location,
        salary: dataEdit.salary, type: dataEdit.type, level_of_experience: dataEdit.level_of_experience
      })
    }).catch((err)=>{
      alert(err)
    })
  }

  const handleDelete = (e) => {
    let jobId = parseInt(e.target.value)
    axios.delete(url + `/${jobId}`,
    {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
    ).then(()=>{
      let newData = data.filter((res)=>{return res.id !== jobId })
      setData(newData)
    }).catch((err)=>{
      alert(err)
    })
  }

  useEffect(() => {
    axios.get(url)
    .then((res)=>{
      let result = res.data.data
      setData([...result])
    }).catch((err)=>{
      alert(err)
    })    
  }, [])
  

  return (
    <div className="flex items-start">
      <Sidebar />
      <section>
        <div className="container mt-8 ml-8">
          <table className=" leading-normal table-auto text-sm text-left text-gray-500 mx-auto font-[Poppins]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Salary</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Experience Level</th>
                {/* <th className="px-6 py-3">Skills</th> */}
                <th className="px-6 py-3">Valid Until</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data !== null && (
                <>
                {data.map((job, index)=>{
                  return(
                    <>
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-50 text-center"
              >
                <td className="px-6 py-4 font-medium"> {job.title} </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_description, 10)} */}
                  {job.description}
                </td>
                <td className="px-6 py-4">
                  {/* {shortenText(res.job_qualification, 10)} */}
                  {job.company_name}
                </td>
                <td className="px-6 py-4">{job.location}</td>
                <td className="px-6 py-4">{job.salary}</td>
                <td className="px-6 py-4">
                  {/* {jobStatus(res.job_status)} */}
                  {job.type}
                </td>
                <td className="px-6 py-4">{job.level_of_experience}</td>
                {/* <td className="px-6 py-4">Skills</td> */}
                <td className="px-6 py-4">{job.date_end}</td>

                <td className="flex flex-col px-6 py-4">
                  <Link to={`/admin/jobs/${job.id}`}>
                    <button
                      // onClick={handleEdit}
                      // value={res.id}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Details
                    </button>
                  </Link>
                  <button
                    onClick={handleEdit}
                    value={job.id}
                    className="font-medium text-green-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    value={job.id}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
                    </>
                  )
                })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default JobsList;
