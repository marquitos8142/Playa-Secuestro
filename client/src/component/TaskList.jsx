import { useEffect , useState} from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./TaskCard";


export function TaskList() {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        async function loadTasks(){
            const res = await getAllTask();
            setTasks(res.data);
            
        }
        loadTasks();
    },[])
    return (
        
        <div className="">
            
            <div className="
            
            md:grid grid-cols-2 justify center
            "
            >
                {tasks.map(task =>(
                <TaskCard key={task.id} task={task}/>
                ))}
            </div>
        </div>
        
    )
}

