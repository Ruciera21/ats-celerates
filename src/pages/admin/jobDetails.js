import React from 'react'
import Sidebar from '../../components/Sidebar'
import Applicants from './applicants'

const JobDetails = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className='flex flex-col'>
    <div className = "container card ml-12 mr-12 mt-12 font-[Poppins]">
        <div className = "display-content mt-12">
                                          <div className='flex flex-col'>
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">title</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">status</p>
                                          </div>
                                    <div className="flex flex-row flex-wrap gap-20">
                                       
                                       <div className='flex flex-col'>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Company:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">company</p>
                                       </div>

                                       <div className='flex flex-col'>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Location:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">location</p>
                                       </div>

                                       <div className='flex flex-col'>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Salary:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">salary</p>
                                       </div>

                                       <div className='flex flex-col'>
                                        <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Type:</h8>
                                        <p className="mb-3 font-normal text-gray-700 ">job type here</p>
                                       </div>

                                        {/* <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Tenure:</h8>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_tenure}</p> */}
                                        
                                      </div>
                                    
                                    {/* <div className='flex flex-row flex-wrap gap-60 justify-around'> */}
                                    <div className='flex flex-col'>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Requirements:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">experience here</p>
                                        <p className="mb-3 font-normal text-gray-700 ">skills here</p>
                                        
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Description:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">description here</p>
                                      
                                       </div>

                                    {/* </div> */}
                                  </div>
            </div>
            <br/>
            <Applicants/>
      </div>

    
    </div>
  )
}

export default JobDetails