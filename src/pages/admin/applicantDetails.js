import React from 'react'

const ApplicantDetails = () => {
  return (
    <div>
        <div className = "card ml-12 mr-12 mt-12">
        <div className = "display-content mt-12">
                                          {/* <div className='flex flex-col'> */}
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">title</h5>
                                        {/* <p className="mb-3 font-normal text-gray-700 ">status</p> */}
                                          {/* </div> */}
                                    
                                    {/* <div className='flex flex-row flex-wrap gap-60 justify-around'> */}
                                    <div className='flex flex-col'>
                                    
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Requirements:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">experience here-add validation for screening</p>
                                        <p className="mb-3 font-normal text-gray-700 ">skills here-add validation for screening</p>
                                    </div>

                                    <div className='flex flex-end gap-10'>
                                    <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 cursor-pointer ml-3">
                                    Accept
                                    </button>
                                    <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer ml-3">
                                    Decline
                                    </button>
                                    </div>

                                    {/* </div> */}
                                </div>
            </div>

            <div className = "card ml-12 mr-12 mt-12">
        <div className = "display-content mt-12">
                                          {/* <div className='flex flex-col'> */}
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Applicant's Details</h5>
                                        {/* <p className="mb-3 font-normal text-gray-700 ">status</p> */}
                                          {/* </div> */}
                                    
                                    {/* <div className='flex flex-row flex-wrap gap-60 justify-around'> */}
                                    <div className='flex flex-col'>
                                    
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Requirements:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">experience here-add validation for screening</p>
                                        <p className="mb-3 font-normal text-gray-700 ">skills here-add validation for screening</p>
                                    </div>

                                    <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
                                    Download CV
                                    </button>

                                    {/* </div> */}
                                </div>
            </div>
    </div>
  )
}

export default ApplicantDetails