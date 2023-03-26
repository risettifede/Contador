import './App.css';
import Boton from './components/Boton';
import Contador from "./components/Contador"
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics++);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img
          className="logo"
          src={require("./images/clic.png")}
          alt="Logo de Clicks"
        />
      </div>
      <div className="contenedor-count">
        <Contador numClics={numClics}
         />
        <Boton
          texto="Clic"
          esBotonClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
