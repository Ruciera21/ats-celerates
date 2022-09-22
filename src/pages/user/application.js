import React from 'react'

const Application = () => {
  return (
    <div>

        <section>
        <div className="container mx-auto ">
            <table className=" leading-normal table-auto text-sm text-left text-gray-500 mx-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                    <tr>
                        
                        <th className="px-6 py-3">Applied On</th>
                        <th className="px-6 py-3">Role Applied</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                        
                            <tr 
                            // key={index} 
                            className="bg-white border-b hover:bg-gray-50 text-center">
                                
                                <td className="px-6 py-4 font-medium"> Date Applied </td>
                                <td className="px-6 py-4">
                                  {/* {shortenText(res.job_description, 10)} */}
                                  System Application Developer
                                  </td>
                                <td className="px-6 py-4">
                                  {/* {shortenText(res.job_qualification, 10)} */}
                                  Status of Application
                                  </td>
                            </tr>
                </tbody>
            </table>
            </div>
        </section>

    </div>
  )
}

export default Application