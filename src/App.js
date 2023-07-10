import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";

function App() {

    const [ninjas, setNinjas] = useState([])
    const aoNovoNinjaAdicionado = (ninja) => {
        console.log(ninja)
        setNinjas([...ninjas, ninja])
    }

  return (
    <div className="App">
      <Banner />
      <Formulario aoNinjaCadastrado={ninja => aoNovoNinjaAdicionado(ninja)}/>
    </div>
  );
}

export default App;
