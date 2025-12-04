import React, { useEffect, useState } from "react";

import Logo from "../assets/taskmanager-logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import G_logo from "../assets/google.png";
import { Button } from "../components/ui/button";
import { UseAuth } from "../Context/AuthContext.tsx";
import type { User } from "../UserType";
import { Spinner } from "../components/ui/spinner";

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

  const [Error, setError] = useState<User>({password: "" , Email :"" , confirm:"", Name:""});

  const Validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tempError :User = {Email : "" , Name : "" , password:"" , confirm: ""} 
    if (!Userinput.Name?.trim()) {
     tempError.Name = "Name is require"
      valid = false;
    } else  if (!Userinput.Email?.trim()) {
      tempError.Email="Email is require"
      valid = false;
    } else if (!emailRegex.test(Userinput.Email || "")) {
     tempError.Email = "Enter a valid Email "
      valid = false;
    }

    const PassRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!PassRegex.test(Userinput.password || "")) {
      tempError.password="Password must have uppercase, lowercase, number, and special character"
      valid = false;
    } else if (!Userinput.password?.trim()) {
     tempError.password="Password is require"
      valid = false;
    } else if(Userinput.password !== Userinput.confirm){
     tempError.confirm =  "must Match the password"
     valid = false
    }
     setError(tempError)
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
    const timer = setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [Message]);
  return (
    <div className=" sm:h-30 md:h-52 lg:h-screen  relative  overflow">
      <div
        className={`w-70 p-4 bg-white border right-3 rounded-md h-14 fixed    transform transition-all ${
          Message ? "-translate-x-5" : "translate-x-80 "
        } flex justify-center items-center shadow-lg  absolute   `}
      >
        <p className="text-center font-semibold font-sans "> {Message} </p>
      </div>
      <div className="flex flex-col justify-center items-center my-auto mx-auto p-4 pb-4 bg-white w-xs min-h-screen   sm:w-md shadow-lg">
        <div className="p-3  flex flex-col justify-center mb-4">
          <img src={Logo} alt="" className="w-20 rounded-4xl mx-auto" />
          <h1 className="font-bold text-2xl text-center">Task Manager</h1>
          <p className="text-center text-gray-500">Welcome back </p>
        </div>
        <div className="w-full   space-y-4">
          <div className="flex justify-center items-center cursor-pointer rounded-md bg-gray-100 space-x-4 border-2 w-full h-10">
            <img src={G_logo} className="w-6 h-6" alt="" />
            <p className="font-semibold">Continue with Google</p>
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
              {Error.Name && <p className="text-red-500 text-sm ">{Error.Name}</p>}
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
              {Error.Email && <p className="text-red-500 text-sm ">{Error.Email}</p>}
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
              {Error.password && <p className="text-red-500 text-sm ">{Error.password}</p>}
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
            {Error.confirm && <p className="text-red-500 text-sm ">{Error.confirm}</p>}
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
