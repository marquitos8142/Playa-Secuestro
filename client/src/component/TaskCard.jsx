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
      lg:w-96 bg-base-100 shadow-xl bg-zinc-800 p-5 hover:bg-zinc-700 hover:cursor-pointer
      

      "
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
      > 
        <figure className="px-10 pt-10">
          <img src={task.foto} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.description}</p>
          <p className="text-slate-400 ">Creado: ({limitedRegistroCreado})</p>
          <p className="text-slate-400">Actualizado: ({limitedRegistroActualizado})</p>
        </div>
    
      </div>

    </div>
    
  
  
  
  );
}