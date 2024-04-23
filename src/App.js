import './App.css';
import FrecodeCampLogo from '../src/imagenes/logoFCC.png';
import ListaDeTarea from './componentes/listaDeTareas';


function App() {
  return (
    <div className="App">
      <div className='lista-de-tarea'>
        <div className='freecodecamp-logo-contenedor'>
          <img
            src={FrecodeCampLogo}
            className='freeCodeCamp-logo'
            alt='Logo de FreecodeCamp'
          />
          
        </div>

        <div className='lista-de-tarea-contenedor'>
          <h1>Lista de Tarea</h1>
          <ListaDeTarea />
        </div>
      </div>
    </div>
  );
}

export default App;
