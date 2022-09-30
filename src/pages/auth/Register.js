import Logo from "../../assets/white-celerates.svg";
import { Link } from "react-router-dom";
// import Card from "./style";
import React from "react";
// import "./style.css";
import Footer from "../../components/Footer";

const Register = () => {
  return (
    <div className="rendering-pixelated main-body opacity-100 bg-slate-900">
      <div className="z-auto md:container container flex-col relative max-w-full max-h-full h-screen w-screen flex overflow-y-hidden overflow-x-hidden md:h-screen justify-center md:justify-center items-center md:items-center">
        <div className="scale-110 md:w-96 md:max-w-xl overflow-hidden md:overflow-y-hidden md:overflow-x-hidden ">
        <Link to="/">
                <img
                  src={Logo}
                  type="catchphrase"
                  alt="banner"
                  className="flex relative h-16 mb-8 mx-auto md:top-0 md:mb-5"
                />
              </Link>
          <div className="card container flex relative md:flex md:relative font-[Poppins] text-sm">
            {/* <Card style={{ backgroundColor: "#999999" }}> */}
            <form className=" flex flex-col gap-1 mt-6 ml-10 mr-10 ">
                <div>
                  <div className="mb-2 text-center">
                    <label htmlFor="username1" value="Name">Name </label>
                  </div>
                  <input
                    id="username1"
                    type="username"
                    className="w-fit flex border-2 border-slate-200 mx-auto"
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2 text-center">
                    <label htmlFor="email1" value="Email">Email</label>
                  </div>

                  <input
                    className="w-fit flex border-2 border-slate-200 mx-auto"
                    id="email1"
                    type="email"
                    placeholder=""
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2 text-center">
                    <label htmlFor="password1" value="Password">Password</label>
                  </div>
                  <input
                    id="password1"
                    type="password"
                    className="w-fit flex border-2 border-slate-200 mx-auto"
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2 text-center">
                    <label
                      htmlFor="confirmpassword1"
                      value="Confirm Password"
                    >Confirm Password</label>
                  </div>
                  <input
                    id="password2"
                    type="password"
                    className="w-fit flex border-2 border-slate-200 mx-auto"
                    required={true}
                  />
                </div>

                <div className="mx-auto my-3 md:flex md:relative md:mt-1">
                  <button
                    type="submit"
                    className="text-white bg-slate-800 border-slate-800 border-solid py-1 px-8"
                    style={{
                      borderRadius: "99px",
                    }}
                  >
                    Register
                  </button>
                </div>
                <div className="mb-3 mt-2 mx-auto flex text-xs ">
                  <p className="">
                    Have an account?
                  </p>
                  <Link
                      to="/login"
                      className="pl-1 md:text-sm hover:underline decoration-dotted decoration-1 underline-offset-2"
                    >
                      Login
                    </Link>
                </div>
              </form>
            {/* </Card> */}
          </div>
        </div>
        <div className="text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;