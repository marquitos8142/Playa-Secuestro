import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  const [limitedRegistroCreado, setLimitedRegistroCreado] = useState(
    task.Registro_Creado.substring(0, 10)
  );
  const [limitedRegistroActualizado, setLimitedRegistroActualizado] = useState(
    task.Registro_Actualizado.substring(0, 10)
  );

  return (

    <div className="flex justify-center">
      <div className=" 
      my-8 mx-5 
      card 
      lg:w-52 h-5/8 bg-base-100 shadow-xl bg-zinc-800 p-5 hover:bg-zinc-700 hover:cursor-pointer
      

      "
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
      > 
      <div className="card-header items-center text-center">
        <img src={task.foto} alt="" className="rounded-xl w-full h-full" />

      </div>
        
        <div className="card-body items-center text-center ">
          <div className="w-16">
            <h5 className="">{task.title}</h5>
          </div>
          

        </div>
        <div className="card-footer items-center text-start">
      
          <p className="text-slate-400 text-xs">Created: ({limitedRegistroCreado})</p>
          <p className="text-slate-400 text-xs">Updated: ({limitedRegistroActualizado})</p>
        </div>
        
    
      </div>

    </div>
    
  
  
  
  );
}