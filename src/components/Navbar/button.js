import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PP from "../../assets/pp.jpg";
import "./style.css";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="flex items-center md:order-2">
      <div>
        <div className="dropdown relative">
          <button
            type="button"
            className="hidden md:flex text-sm transition duration-150 ease-in-out items-center whitespace-nowrap bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-12 h-12 rounded-full" src={PP} alt="user" />
          </button>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-right
          py-2
          pr-8
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          mr-8
          
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton2"
          >
            {/* <li>
              <Link
                to="/"
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              hidden
              font-normal
              md:block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              ></Link>
            </li> */}

              {!Cookies.get('token') && 
              <li>
              <Link
                to="/login"
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              md:block
              hidden
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              >
                Login
              </Link>
            </li>
              }

            {Cookies.get('token') && <>
            <li>
              <Link
                to="/user/profile"
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              hidden
              font-normal
              md:block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              >Profile</Link>
            </li>

            <li>
              <button
                onClick={()=>{
                  Cookies.remove('token')
                  Cookies.remove('user')
                  navigate('/login')
              }}
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              md:block
              hidden
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
              uppercase
            "
              >
                Logout
              </button>
            </li>
            </>
            }

            

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
