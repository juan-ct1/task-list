import React, { useState } from "react";
import TareaFormulario from "./Tarea-from"; // Asumiendo que el nombre del componente es "TareaForm"
import Tarea from './tarea'; 
import '../hojas-de-estilos/listaTareas.css';

function ListaDeTarea() {
  const [tareas, setTareas] = useState([]);

  const agregarTareas = tarea => {
    if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();

        const tareasActualizada = [tarea, ...tareas];
        setTareas(tareasActualizada);
    }
  };

  const eliminarTarea = id =>{
    const tareasActualizada = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizada);
  }

  const completarTarea = id =>{
    const tareasActualizada = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada =!tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizada);
  }
  return (
    <>
      <TareaFormulario onSubmit={agregarTareas} />
      <div className='tarea-lista-contenedor'>
        {tareas.map((tarea, id) => (
          <Tarea
            key={id}
            id={id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTarea;

