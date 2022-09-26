import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside
        className="flex h-screen items-center justify-center"
        x-show="asideOpen"
      >
        <div className="bg-gray-200 px-8 py-10 flex gap-3 flex-row text-black">
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
      <div className="flex">
        <Sidebar />
        <section className="flex h-screen items-center m-auto">
          <form className="personal-info ml-11 container flex flex-col justify-between py-4">
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
    </>
  );
};

export const Experience = () => {
  return (
    <>
      {" "}
      <div className="flex">
        <Sidebar />
        <section className="flex h-screen items-center m-auto">
          <form className="exp container ">
            {/* <div className='flex flex-row gap-4'> */}
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
      </div>
    </>
  );
};

export const Skills = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />
        <section className="flex h-screen items-center m-auto">
          <form className="skills container">
            <div className="flex flex-col">
              <label>Skills</label>
              <textarea name="skills" className="border" />
            </div>

            <button className="md:max-w-sm inline-flex w-fit justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer mt-3">
              Save
            </button>
          </form>
        </section>
      </div>
    </>
  );
};
