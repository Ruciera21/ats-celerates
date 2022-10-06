import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import PP from "../../assets/pp.jpg";

const Sidebar = () => {
  return (
    <div>
      <aside
        className="flex h-screen items-center justify-center"
        x-show="asideOpen"
      >
        <div className="bg-gray-200 px-10 py-10 flex gap-3 text-black h-screen font-[Poppins]">
          <ul className="flex flex-col gap-2">
            <Link to="/user/profile">
              <li>
                <button>Personal Info</button>
              </li>
            </Link>
            <Link to="/user/profile/experience">
              <li>
                <button>Experience</button>
              </li>
            </Link>
            <Link to="/user/profile/skills">
              <li>
                <button>Skills</button>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export const Profile = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row xl:mx-24">
        <Sidebar />
        <section className="flex mx-auto font-[Poppins]">
        <div className="container w-fit h-fit border-none">
        <div className="display-content py-10">
          <div className="flex flex-col text-center items-center">
            <img className="w-48 h-48 rounded-full" src={PP} alt="user" />
            <h5 className="mb-2 text-xl font-bold text-gray-900 ">
            Your Name
            </h5>
            
          </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Phone Number:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">08089999</p>
            </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Last Education:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">S1 (Bachelor's degree)</p>
            </div>

            <div className="flex flex-row gap-10">
            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                LinkedIn URL:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">linkedin</p>
            </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Github URL:
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">github</p>
            </div>
            </div>

            <div className="flex flex-row justify-center">
      <Link to='/user/profile/edit'>
        <button className="md:max-w-sm inline-flex w-fit align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
          Edit
        </button>
      </Link>
            </div>
        </div>

      </div>

          
        </section>
        </div>
      </div>
    </>
  );
};

export const EditProfile = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row xl:mx-24">

        <Sidebar />
        <section className="flex h-screen font-[Poppins]">

    <form className="personal-info ml-11 container flex flex-col gap-2 py-10">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <label>First Name</label>
                <input type="text" name="firstname" className="border" />
              </div>

              <div className="flex flex-col">
                <label>Last Name</label>
                <input type="text" name="lastname" className="border" />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Profile Picture</label>
              <input
                type="file"
                name="avatar"
                placeholder="insert link"
                className="border"
                accept="image/png, image/jpg, image/jpeg"
              />
            </div>

            <div className="flex flex-col">
              <label>Phone Number</label>
              <input type="text" name="phone" className="border" />
            </div>

            <div className="flex flex-col">
              <label>Last Education</label>
              <input type="text" name="education" className="border" />
            </div>

            <div className="flex flex-col">
              <label>LinkedIn URL</label>
              <input type="text" name="linkedin" className="border" />
            </div>

            <div className="flex flex-col">
              <label>Github URL</label>
              <input type="text" name="github" className="border" />
            </div>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Save
            </button>
          </form>
        </section>
        </div>
        </div>
  )
}

export const Experience = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row xl:mx-24">
        <Sidebar />
        <section className="flex h-screen font-[Poppins]">
          <form className="exp-container ml-11 container flex flex-col gap-2 py-10">
          <div className="flex flex-col">
              <label>Company Name</label>
              <input type="text" name="company" className="border" />
            </div>

            <div className="flex flex-col">
              <label>Role</label>
              <input type="text" name="role" className="border" />
            </div>
            {/* </div> */}

            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <label>Start</label>
                <input type="date" name="date-start" className="border" />
              </div>

              <div className="flex flex-col">
                <label>End</label>
                <input type="date" name="date-end" className="border" />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Description</label>
              <textarea name="description" className="border" />
            </div>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Save
            </button>
          </form>
        </section>
        
        <div className="flex flex-col">

        <section className="flex font-[Poppins]">
          <div className="exp-container ml-11 container flex flex-col gap-2 py-10">
          <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Company Name</h5>
              <p>PT PT</p>
            </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Role</h5>
              <p>Head to Toe</p>
            </div>

              <div className="flex flex-col">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Duration</h5>
                <p>Start - End</p>
              </div>

            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Description</h5>
              <p>Lorem ipsum dolor sit amet ...</p>
            </div>

            <div className="flex flex-row justify-between">
            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Edit
            </button>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer mt-3">
              Delete
            </button>
            </div>
          </div>
        </section>
        </div>
        </div>
      </div>
    </>
  );
};

export const Skills = () => {
  return (
    <>
    <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row xl:mx-24">
        <Sidebar />
        <section className="flex h-screen py-10 font-[Poppins]">
        <form className="skills container ml-11">
            <div className="flex flex-col">
              <label>Skills</label>
              <textarea name="skills" className="border" />
            </div>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Save
            </button>
          </form>
        </section>

        <section className="flex h-screen font-[Poppins]">
          <div className="skills-container ml-11 container flex flex-col gap-2 py-10">
            <div className="flex flex-col">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Skills</h5>
              <p>Go Programming Language, etc.</p>
            </div>

            <div className="flex flex-row justify-between">
            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Edit
            </button>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer mt-3">
              Delete
            </button>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};
