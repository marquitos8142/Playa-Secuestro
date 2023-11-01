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
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {task.title}
      </h1>
      <p className="text-slate-400">{task.description}</p>
      <div className="justify-center">
        <img className="w-80 relative " src={task.foto} alt="" />
      </div>
      
      <p className="text-slate-400 text-right">Creado: ({limitedRegistroCreado})</p>
      <p className="text-slate-400 text-right">Actualizao: ({limitedRegistroActualizado})</p>

    </div>
  );
}