import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/taskmanager-logo.png";

import G_logo from "../assets/google.png";
import F_logo from "../assets/facebook.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type user = {
  Email: string;
  password: string;
};
const Login = () => {
  const [Userinput, setUserinput] = useState<user>({ Email: "", password: "" });
  const [Error, setError] = useState({ email: "", password: "" });

  const Validate = () => {
    let valid = true;
    let newError = { email: "", password: "" };

    if (!Userinput.Email.includes("@")) {
      newError.email = "Please Enter valid email";
      valid = false;
    }

    const symbolRegex = /[!@#$%^&*(),.?":{}|]/;

    if (Userinput.password.length < 7) {
      newError.password = "Password must be at least 7 character";
      valid = false;
    } else if (!symbolRegex.test(Userinput.password)) {
      newError.password =
        "Password must contains at least one symbol (!@#$%^&*)";
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Validate()) {
    }
  };

  return (
    <div className=" sm:h-30 md:h-52 lg:min-h-screen ">
      <div className="flex flex-col justify-center items-center my-auto mx-auto p-4 bg-white w-xs h-170   sm:w-md shadow-lg pb-4">
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
        <form
          onSubmit={Submit}
          className="w-full flex-col justify-center space-y-4 mt-4"
        >
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-semibold">
              Email
            </label>

            <input
              type="text"
              name="Email"
              placeholder="you@example.com"
              value={Userinput.Email}
              onChange={(e) =>
                setUserinput({ ...Userinput, Email: e.target.value })
              }
              className="h-9 rounded-md px-3  bg-gray-200 
              focus:outline-none  focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 "
            />

            {Error.email && (
              <p className="text-red-500 text-md">{Error.email}</p>
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="password"
              value={Userinput.password}
              onChange={(e) =>
                setUserinput({ ...Userinput, password: e.target.value })
              }
              className="h-9 border-2 px-3 rounded-md bg-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
            />

            {Error && <p className="text-red-500 text-md">{Error.password}</p>}
            <Link to="/" className="ms-auto text-blue-600 font-semibold">
              Forget password?
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              size={"lg"}
              variant={"link"}
              type="submit"
              className="w-70 sm:w-sm bg-purple-500 text-white text-lg "
            >
              Submit
            </Button>
            <br />
          </div>
          <p className="text-center mt-4 pt-4 text-gray-500 font-medium pb-5">
            Don't have an account?{" "}
            <Link to="/Singup" className="text-purple-600">
              Sing up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
