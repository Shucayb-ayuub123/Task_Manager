import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/taskmanager-logo.png";

import G_logo from "../assets/google.png";
import F_logo from "../assets/facebook.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail } from "lucide-react";
const SingUp = () => {
  return (
    <div className="h-screen ">
      <div className="flex flex-col justify-center items-center mx-auto p-4 bg-white w-xs   sm:w-md shadow-lg">
        <div className="p-3  flex flex-col justify-center">
          <img src={Logo} alt="" className="w-20 rounded-4xl mx-auto" />
          <h1 className="font-bold text-2xl text-center">Task Manager</h1>
          <p className="text-center text-gray-500">Welcome back </p>
        </div>
        <div className="w-full   space-y-4">
          <div className="flex justify-center items-center cursor-pointer rounded-md bg-gray-100 space-x-4 border-2 w-full h-10">
            <img src={G_logo} className="w-6 h-6" alt="" />
            <p className="font-semibold">Continue with Google</p>
          </div>
          <div className="flex justify-center items-center cursor-pointer rounded-md bg-gray-100  space-x-4 w-full border-2 h-10">
            <img src={F_logo} className="w-6 h-6 " alt="" />
            <p className="font-semibold">Continue with facebook</p>
          </div>

          <div className="flex justify-center items-center space-x-7 w-full">
            <p className="text-gray-500 ">OR CONTINUE WITH EMAIL</p>
          </div>
        </div>
        <form action="" className="w-full flex-col justify-center space-y-4 mt-4">
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Email</label>

            <Input
              type="text"
              name="Email"
              placeholder="you@example.com"
              className="
    bg-gray-100 font-medium transition-smooth
    border border-transparent
    focus:outline-none
    focus:border-r-2
    focus:border-r-amber-400
  "
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Password</label>
            <Input
              type="text"
              name="Password"
              placeholder="password"
              className="bg-gray-100  font-medium "
            />
            <Link to="/" className="ms-auto text-blue-600 font-semibold">
              Forget password?
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              size={"lg"}
              variant={"link"}
              className="w-70 sm:w-sm bg-purple-500 text-white text-lg "
            >
              Submit
            </Button>
            <br />
          </div>
          <p className="text-center mt-4 pt-4 text-gray-500 font-medium">
            Don't have an account?{" "}
            <Link to="/" className="text-purple-600">
              Sing up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
