import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/taskmanager-logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import G_logo from "../assets/google.png";
import F_logo from "../assets/facebook.png";
import { Button } from "../components/ui/button";
import { UseAuth } from "../Context/AuthContext.tsx";
import type { User } from "../UserType";
import { Spinner } from "../components/ui/spinner";
import { clearTimeout } from "timers";
const SingUp = () => {
  const [Userinput, setUserinput] = useState<User>({
    confirm: "",
    Name: "",
    Email: "",
    password: "",
    showPass: false,
  });
  const [Loading, setloading] = useState<boolean>(false);
  const [Message, setMessage] = useState<string>("");

  const { SingUp } = UseAuth();
  let valid = true;

  const [Error, setError] = useState<string>("");

  const Validate = () => {
    if (Userinput.password !== Userinput.confirm) {
      setError("Password must match");
      valid = false;
    }

    return valid;
  };

  const Submit1 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Validate()) return;
    const { confirm, showPass, ...singupData } = Userinput;
    setloading(true);
    try {
      const respons = await SingUp(singupData);
      setMessage(respons);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
   const timer =  setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timer)
  }, [Message]);
  return (
    <div className=" sm:h-30 md:h-52 lg:h-screen relative  overflow-hidden">
      <div
        className={`w-70 p-4 bg-white border-1 right-3 rounded-md h-14 mt-40 duration-75  transform transition-all ${
          Message ? "-translate-x-5" : "translate-x-70 "
        } flex justify-center items-center shadow-lg  absolute   `}
      >
        <p className="text-center "> {Message} </p>
      </div>
      <div className="flex flex-col justify-center items-center my-auto mx-auto p-4 pb-4 bg-white w-xs h-200   sm:w-md shadow-lg">
        <div className="p-3  flex flex-col justify-center -mt-20">
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
          action=""
          onSubmit={Submit1}
          className="w-full flex-col justify-center space-y-4 mt-4"
        >
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-semibold">
              Name
            </label>

            <input
              type="text"
              name="Email"
              placeholder="Enter Name"
              value={Userinput.Name}
              onChange={(e) =>
                setUserinput({ ...Userinput, Name: e.target.value })
              }
              className="h-9 rounded-md px-3  bg-gray-200 
              focus:outline-none  focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 "
            />
          </div>

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
          </div>

          <div className="flex flex-col space-y-3 relative">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input
              type={Userinput.showPass ? "text" : "Password"}
              name="Password"
              placeholder="password"
              value={Userinput.password}
              onChange={(e) =>
                setUserinput({ ...Userinput, password: e.target.value })
              }
              className="h-9 border-2 px-3 rounded-md bg-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
            />

            <div
              className="absolute right-2 top-11 cursor-pointer"
              onClick={() =>
                setUserinput({ ...Userinput, showPass: !Userinput.showPass })
              }
            >
              {Userinput.showPass ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-semibold">
              Confirm Password
            </label>
            <input
              type="Password"
              name="Password"
              placeholder="password"
              value={Userinput.confirm}
              onChange={(e) =>
                setUserinput({ ...Userinput, confirm: e.target.value })
              }
              className="h-9 border-2 px-3 rounded-md bg-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
            />
            {Error && <p className="text-red-500 ">{Error}</p>}
          </div>
          <div className="flex justify-center mt-10">
            <Button
              size={"lg"}
              variant={"link"}
              type="submit"
              className="w-70 sm:w-sm bg-purple-500 text-white text-lg "
            >
              {Loading ? <Spinner fontSize={40} /> : "Submit"}
            </Button>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
