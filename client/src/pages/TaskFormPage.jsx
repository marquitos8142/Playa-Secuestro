import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createTask, deleteTask, updateTask, getTask } from "../api/task.api";
import { toast } from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";



export function TaskFormpage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {


    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea creada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    }

    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("campo1", data.campo1);
        setValue("campo2", data.campo2);
        setValue("campo3", data.campo3);
        setFile("foto", data.foto);
      }
    }

    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.description && <span>This field is required</span>}
        <br />

        <textarea
          placeholder="campo1"
          {...register("campo1", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.campo1 && <span>This field is required</span>}
        <br />

        <textarea
          placeholder="campo2"
          {...register("campo2", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.campo2 && <span>This field is required</span>}
        <br />

        <textarea
          placeholder="campo3"
          {...register("campo3", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.campo3 && <span>This field is required</span>}
        <br />

        <input
          type="file"
          name="foto"
          accept="image"
          placeholder="foto"
          {...register("foto", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />
        
        


        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
        

      </form>
      
          
        

        
        

 
        {
          params.id && <button onClick={async()=>{
            const accepted = window.confirm('¿Estas seguro?')
            if (accepted){
              await deleteTask(params.id);
              navigate('/tasks');
              toast.success('Tarea Eliminada', {
                position: "bottom-right",
                style: {
                  background : "#101010",
                  color : "white",
                }
              })
            }
          } }>Delete</button>
        }
      </div>

    )
  }
  
  