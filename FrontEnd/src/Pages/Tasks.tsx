import { useEffect, useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Trash } from "lucide-react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Edit } from "lucide-react";
import { Calendar } from "lucide-react";
import axios from "axios";
type User_task = {
  title: string;
  description: string;
  date?: Date;
};
const Tasks = () => {
  const [check_box1, setCheck] = useState<CheckedState>(false);
  const [Task, setTasks] = useState<User_task[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Post/Select_Task")
      .then((respone) => setTasks(respone.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-10">
        <div
          className={`w-8/12 flex space-x-3 group transform transition-all duration-300 hover:shadow-lg ${
            check_box1 == true ? " hover:border-0 " : ""
          } shadow p-5 hover:border-[0.2px] hover:border-cyan-500 rounded-lg`}
        >
          <Checkbox
            checked={check_box1}
            onCheckedChange={setCheck}
            className="w-6 h-6 border-2  border-cyan-500 transform transition-opacity duration-200 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
          />
            {Task.map((t ,index)=> (
              <>
          <div className="space-y-2 mt-0 mb-4" key={index}>
            <h1
              className={`text-xl font-bold ${
                check_box1 == true ? "line-through text-gray-400" : ""
              }`}
            >
              {t.title}
            </h1>
            <p
              className={`text-gray-500 text-sm font-sans ${
                check_box1 == true ? "line-through" : ""
              }`}
            >
              {t.description}
            </p>
            <h3
              className={`flex space-x-5 font-semibold font-sans ${
                check_box1 == true ? "line-through text-gray-400" : ""
              }`}
            >
              <Calendar /> {t.date ? t.date.toLocaleDateString() : "No date"}
            </h3>
          </div>
              </>
            ))
          }
          <div className=" flex justify-start ms-auto space-x-3   ">
            <div className="hidden group-hover:flex">
              <div className="hover:bg-cyan-300  rounded-sm h-10 w-10 flex justify-center items-center">
                <Edit
                  className={`w-5 h-5 ${
                    check_box1 == true ? "text-gray-400" : ""
                  }`}
                />
              </div>
              <div className="hover:bg-red-300  rounded-sm h-10 w-10 flex justify-center items-center">
                <Trash className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
