import { useState, useEffect } from "react";
import { Trash, Edit, Calendar } from "lucide-react";
import { GiTick } from "react-icons/gi";
import axios from "axios";

type User_task = {
  Task_id?: number;
  Task_title: string;
  Description: string;
  Date1: Date;
  complete?: boolean;
};

const Tasks = ({ task }: { task: User_task[] }) => {
  // Local state for tasks
  const [taskList, setTaskList] = useState<User_task[]>(task);
  const [toggle, setToggle] = useState<boolean>(false);
  const [TaskEdit  , setTaskEdit] = useState<User_task>({
  Task_id: 0,
  Task_title: "",
  Description: "",
  Date1: new Date,
  complete: false
  })
 
  const [EditTask , setEdit] = useState<User_task>()
  // Keep local state updated when parent sends new tasks
  useEffect(() => {
    setTaskList(task);
  }, [task]);

  function toggleCheck(id: number) {
    const updated = taskList.map((t) =>
      t.Task_id === id ? { ...t, complete: !t.complete } : t
    );

    setTaskList(updated); // 👈 IMPORTANT
  }

  
  async function Toggle(id:number) {
    const respone = await axios.post(`http://localhost:3000/Select_Task/Edit/${id}`)
    setEdit(respone.data)
    setToggle((prev) => !prev);
  }
  
  
   
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-4 mt-10">
      {taskList.map((t) => (
        <div
           key={t.Task_id}
          className={`w-11/12 md:w-8/12 sm:w-11/12 flex space-x-3 group transform transition-all duration-300 hover:shadow-lg ${
            t.complete ? "hover:border-0" : ""
          } shadow p-5 hover:border-[0.2px] hover:border-cyan-500 rounded-lg`}
        >
          <div className="w-full flex space-x-4">
            
          <input
            type="checkbox"
            checked={t.complete ?? false}
            onChange={() => toggleCheck(t.Task_id!)}
            className="w-5 h-5 rounded border-2 border-cyan-500 checked:bg-cyan-500 checked:border-cyan-500 cursor-pointer"
          />

          <div className="space-y-2 mt-0 mb-4">
            <h1
              className={`text-xl font-bold ${
                t.complete ? "line-through text-gray-400" : ""
              }`}
            >
              {t.Task_title}
            </h1>

            <p
              className={`text-gray-500 text-sm font-sans ${
                t.complete ? "line-through" : ""
              }`}
            >
              {t.Description}
            </p>

            <h3
              className={`flex space-x-5 font-semibold font-sans ${
                t.complete ? "line-through text-gray-400" : ""
              }`}
            >
              <Calendar  className="mr-2"/>
              {t.Date1 ? new Date(t.Date1).toLocaleDateString() : "No date"}
            </h3>
          </div>

          <div className="ms-auto flex space-x-3">
            <div className="flex lg:hidden group-hover:flex space-x-2">
              <div className="hover:bg-cyan-300 rounded-sm h-10 w-10 flex justify-center items-center" onClick={() => Toggle(t.Task_id!)}>
                <Edit
                  className={`w-5 h-5 ${t.complete ? "text-gray-400" : ""}`}
                />

              </div>

              <div className="hover:bg-red-300 rounded-sm h-10 w-10 flex justify-center items-center">
                <Trash className="w-5 h-5" />
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
     </div>

    )
    
        
    
}




// const UpadateTask = ({task} : {task:User_task[]}) => {
//   return (
//      <div className="w-full flex justify-center items-center flex-col">
//         <div className="w-11/12 flex  justify-center items-center flex-col">
//           {toggle == true ? (
//             ""
//           ) : (
//             <button
//               className="w-full p-3 shadow-lg bg-cyan-600 text-white rounded-md text-lg font-semibold"
//               onClick={Toggle}
//             >
//               + Add New Task
//             </button>
//           )}{" "}
//           <br /> <br />
//           {toggle == true ? (
//             <div className="bg-white shadow-xl flex-col w-full p-4 space-y-4 border-2 border-gray-100 animate-in fade-in-5 slide-in-from-top-4 duration-500 ">
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 value={Data.Task_title}
//                 onChange={(e) => setData({ ...Data, Task_title: e.target.value })}
//                 placeholder="title Task"
//                 className="w-full border-2 h-10 px-2 font-semibold rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none"
//               />
//               <textarea
//                 placeholder="Description"
//                 rows={4}
//                 cols={10}
//                 value={Data.Description}
//                 onChange={(e) =>
//                   setData({ ...Data, Description: e.target.value })
//                 }
//                 className="w-full border-2  rounded-sm px-2 focus:ring focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:ring-offset-2 "
//               ></textarea>
//               <input
//                 type="date"
//                 value={Data?.Date1 ? Data.Date1.toISOString().split("T")[0] : ""}
//                 onChange={(e) =>
//                   setData({ ...Data, Date1: new Date(e.target.value) })
//                 }
//                 className="w-full border-2 h-11 px-2 rounded-sm focus:ring-1 ring-amber-100"
//               />
//               <div className="flex space-x-3  w-full">
//                 <button
//                   className="w-11/12 h-11 rounded-md text-white font-semibold bg-cyan-600 hover:bg-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                   disabled={
//                     !Data.Description.trim() && !Data.Task_title.trim() && !Data.Date1
//                   }
//                   onClick={HandlerTask}
//                 >
//                   Add task
//                 </button>
//                 <button
//                   className="bg-gray-200 px-5 font-semibold  rounded-md flex-1 hover:bg-amber-500 hover:text-white"
//                   onClick={Toggle}
//                 >
//                   cancel
//                 </button>
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
// </div>
//   )
// }




export default Tasks;
    
  


