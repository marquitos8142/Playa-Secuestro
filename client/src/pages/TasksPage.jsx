import { TaskList } from "../component/TaskList"
import { Link } from "react-router-dom"

export function TasksPage() {
  return (
    <div className="">
      <div className="grid grid-cols-3 justify center">
        <p></p>
        <Link to='/tasks-create'><button className="bg-indigo-500 p-3 w-full  rounded-lg block  mt-3">
          Crear
        </button></Link>
        <p></p>
    </div>
      <TaskList/>
    </div>
  );
 
}

