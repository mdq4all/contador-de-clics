import './App.css';
import freecodecampLogo from './imagenes/fcc-logo.svg'
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import {useState} from 'react';

function App() {

  const[numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>  {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          alt='freecodecamp-logo'
          src={freecodecampLogo}
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
