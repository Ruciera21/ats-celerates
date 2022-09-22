import React from 'react'

const JobForm = () => {
  return (
    <div>

        <section className='container'>
            <form className='flex flex-col'>
                <label>Job Title</label>
                <input type='text' name='title' className='border'/>

                <label>Job Description</label>
                <textarea name='description' className='border'/>

                <label>Company Name</label>
                <input type='text' name='company' className='border'/>

                <label>Location</label>
                <input type='text' name='location' className='border'/>

                <label>Salary</label>
                <input type='number' name='salary' className='border'/>

                <label>Type</label>
                <input type='text' name='type' className='border'/>

                <label>Experience Level</label>
                <input type='text' name='exp' className='border'/>

                <label>Skills</label>
                <input type='text' name='skills' className='border'/>
                
            </form>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-4">
                Submit
            </button>
        </section>

    </div>
  )
}

export default JobForm