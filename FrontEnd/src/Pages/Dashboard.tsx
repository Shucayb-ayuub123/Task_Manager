import React, { useState } from "react";
import tick from "../assets/tick.png";
import Search from "../assets/search.png";
import 
type User_task = {
  title: string;
  description: string;
  date?: Date;
};
const Dashboard = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [Data, setData] = useState<User_task>({
    title: "",
    description: "",
    date: new Date(),
  });

  function Toggle() {
    setToggle((prev) => !prev);
  }
  return (
    <div className=" min-h-screen animate-in fade-in-20 slide-in-from-bottom-5 duration-500 ">
      {/* Header */}
      <div className="w-full  flex justify-center items-center flex-col space-y-3 p-10">
        <div className="bg-cyan-600 p-3 rounded-lg">
          <img src={tick} alt="" width={40} />
        </div>
        <h2 className=" text-4xl lg:text-5xl md:text-4xl  sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-yellow-200 bg-clip-text text-transparent">
          Task Manager
        </h2>

        <p className="text-xl text-gray-500  text-center">
          Stay organized and boot your productivity
        </p>
      </div>
      {/* Form */}
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-8/12 flex  justify-center items-center flex-col">
          {toggle == true ? (
            ""
          ) : (
            <button
              className="w-full p-3 shadow-lg bg-cyan-600 text-white rounded-md text-lg font-semibold"
              onClick={Toggle}
            >
              + Add New Task
            </button>
          )}{" "}
          <br /> <br />
          {toggle == true ? (
            <div className="bg-white shadow-xl flex-col w-full p-4 space-y-4 border-2 border-gray-100 animate-in fade-in-5 slide-in-from-top-4 duration-500 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="title Task"
                className="w-full border-2 h-10 px-2 font-semibold rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none"
              />
              <textarea
                placeholder="Description"
                className="w-full border-2  rounded-sm px-2 focus:ring focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:ring-offset-2 "
                rows={4}
                cols={10}
              ></textarea>
              <input
                type="date"
                className="w-full border-2 h-11 px-2 rounded-sm focus:ring-1 ring-amber-100"
              />
              <div className="flex space-x-3  w-full">
                <button
                  className="w-11/12 h-11 rounded-md text-white font-semibold bg-cyan-600 hover:bg-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={
                    !Data.description.trim() && !Data.title.trim() && !Data.date
                  }
                >
                  Add task
                </button>
                <button
                  className="bg-gray-200 px-5 font-semibold  rounded-md flex-1 hover:bg-amber-500 hover:text-white"
                  onClick={Toggle}
                >
                  cancel
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={`w-8/12 relative  ${toggle ? "mt-10" : ""}`}>
          <img src={Search} alt="" className="absolute top-1 left-2" />
          <input
            type="text"
            className="w-full h-11 px-10 rounded-sm border-1 text-md focus:rign focus:ring-2 focus:ring-cyan-500 
           focus:ring-offset-2"
            placeholder="Search tasks..."
          />
        </div>
      </div>

      {/* table */}

      <div className="w-full flex justify-center items-center mt-5 space-x-2">
        <div className="w-8/12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
            <button className="w-full  bg-amber-50 focus:bg-cyan-500 focus:text-white  py-2 transition-all transform duration-300 hover:bg-amber-600 hover:text-white border-1 rounded-sm font-semibold">
            <  All Task   <span className="bg-gray-200 px-1 text-gray-600 text-sm text-center  rounded-xl">0</span>
            </button>
    
          
            <button className="w-full col-span-1 py-2 gap-3 hover:text-white  focus:text-white border-1 focus:bg-cyan-500   transition-all transform duration-500 hover:bg-amber-600 rounded-sm font-semibold">
              Active <span className="bg-gray-200 px-1 text-gray-600 text-sm text-center rounded-xl">0</span> 
            </button>
    
          
            <button className="w-full col-span-2 sm:col-span-2 md:col-span-1  py-2 px-3 space-x-3 mx-auto  hover:text-white  focus:text-white  focus:bg-cyan-500 transition-all transform duration-300 hover:bg-amber-600 border-1 rounded-sm font-semibold">
              Complete <span className="bg-gray-200 px-1 text-gray-600 text-sm text-center  rounded-xl">0</span> 
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
