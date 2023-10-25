import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { createTask, deleteTask , updateTask, getTask} from '../api/task.api'
import { toast } from 'react-hot-toast'

import {useNavigate , useParams} from 'react-router-dom'

export function TaskFormpage() {
  const {register, handleSubmit, formState: {errors},setValue,
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()


  const onSubmit = handleSubmit (async data=>{
    if (params.id){ 
      await updateTask(params.id, data)
      toast.success('Tarea Actualizada', {
        position: "bottom-right",
        style: {
          background : "#101010",
          color : "white",
        }
      })
    } else{
      await createTask(data);
      toast.success('Tarea creada', {
        position: "bottom-right",
        style: {
          background : "#101010",
          color : "white",
        }
      })
    }
    navigate('/tasks');
 
  })
  useEffect(()=>{
    async function loadtask(){
        if (params.id){
          
          const { data } = await getTask(params.id);
          setValue("title", data.title);
          setValue("description", data.description);
        
        }
    }
    loadtask();

  }, [])

    return (
      <div>      
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="title"
          {...register('title',{required: true})} />
          {errors.title && <span>este campo es requirido</span> }
          <textarea rows="3" placeholder="Decription"
          {...register('description',{required: true})}></textarea>
          {errors.description && <span>este campo es requirido</span> }

          <button>Save </button>
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
  
  