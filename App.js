import './App.css';
import Boton from './components/Boton';
import Contador from "./components/Contador"

function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
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
        <Contador numClics="5"
  
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
