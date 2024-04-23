import React, { useState } from "react";
import '../hojas-de-estilos/tarea-from.css'
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props){

	const [input,setInput] = useState('');

	const manejarCambio = e => {
		setInput(e.target.value);
	};
	const manejarEnvio = e =>{
		e.preventDefault();
		const tareaNueva = {
			id : uuidv4(),
			texto : input,
			completado : false

		};

		props.onSubmit(tareaNueva);
	};
    return(
        <form className='tarea-from'
				onSubmit={manejarEnvio}>
        <input className='tarea-input'
        type='texto'
        placeholder='Escribe una Tarea'
        name='Texto'
				onChange={manejarCambio}
        />

        <button className='tarea-boton'>
            Agregar Tarea
        </button>
        </form>
    );
}

export default TareaFormulario;