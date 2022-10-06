import React, { useState } from "react";
import Footer from "../../components/Footer";

import Logo from "../../assets/white-celerates.svg";
import LinkedIn from "../../assets/linkedin.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const url = "https://ats-app-cap.herokuapp.com/login";
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let { email, password } = input;

    axios
      .post(url, { email, password })
      .then((data) => {
        console.log(data);
        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("user", JSON.stringify(data.user), { expires: 1 });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var dynamicHeight = `calc(94% - 44px)`;
  return (
    <div
      className="main-body opacity-100 bg-slate-900 rendering-pixelated "
      style={{ height: dynamicHeight }}
    >
      <div className="z-auto md:container container flex-col relative max-w-full max-h-full h-screen w-screen flex overflow-y-hidden overflow-x-hidden md:h-screen justify-center md:justify-center items-center md:items-center">
        <div className="scale-110 md:max-w-l overflow-hidden md:overflow-y-hidden md:overflow-x-hidden ">
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
            <form
              onSubmit={handleLogin}
              className=" flex flex-col gap-1 mt-6 ml-10 mr-10 "
            >
              <div>
                <div className="mb-2 text-center">
                  <label htmlFor="email1" value="Email">
                    Email
                  </label>
                </div>

                <input
                  className="w-fit flex border-2 border-slate-200 mx-auto"
                  id="email1"
                  type="email"
                  placeholder=""
                  required={true}
                  value={input.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>

              <div>
                <div className="my-2 text-center">
                  <label htmlFor="password1" value="Password">
                    Password
                  </label>
                </div>
                <input
                  id="password1"
                  type="password"
                  className="w-fit flex border-2 border-slate-200 mx-auto"
                  required={true}
                  value={input.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <div className="capitalize flex items-center text-xs my-2 mx-auto ">
                <input type="checkbox" id="remember" className="mr-1" />
                <label htmlFor="remember">remember me</label>
              </div>
              <div className="mx-auto md:flex md:relative hover:underline decoration-dotted decoration-2 underline-offset-4">
                <Link to="/" className="text-xs">
                  forgot your password?
                </Link>
              </div>
              <div className="mx-auto mt-3 mb-1 md:flex md:relative md:mt-1">
                <button
                  type="submit"
                  className="mx-auto text-white bg-slate-800 border-slate-800 border-solid py-1 px-6"
                  style={{
                    borderRadius: "99px",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            <p className="mb-1 md:pt-1 mx-auto"> or </p>
            <div className="mx-auto md:flex md:relative md:gap-1 md:mt-1 md:mb-3 md:pl-1 text-sm">
              <button
                type="submit"
                style={{
                  color: "white",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                  border: "1px solid #152238",
                  backgroundColor: "#152238",
                  borderRadius: "99px",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <div className="flex relative">
                  <img src={LinkedIn} type="catchphrase" alt="banner" />
                  <p className="pl-4 ">Sign In with LinkedIn</p>
                </div>
              </button>
            </div>
            <div className="flex relative flex-col mt-4 md:flex md:flex-col gap-1 md:mt-2 mb-3">
              <p className="pr-40 pl-10 md:left-0 md:pr-40 text-xs md:flex md:mt-1 md:pl-10">
                Don't have account?
                <Link
                  to="/register"
                  className="relative left-28 text-xs hover:underline decoration-dotted decoration-1 underline-offset-2"
                >
                  Register
                </Link>
              </p>
            </div>
            {/* <p>email {login}</p> */}
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

export default Login;
