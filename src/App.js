import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Aldeia from "./componentes/Aldeia";

function App() {

    const aldeias = [
        {
            nome: "Folha",
            corPrimaria: "#57c278",
            corSecundaria: "#d9f7e9"
        },
        {
            nome: "Areia",
            corPrimaria: "#e06b69",
            corSecundaria: "#fde7e8"
        },
        {
            nome: "Névoa",
            corPrimaria: "#a6d157",
            corSecundaria: "#f0f8e2"
        },
        {
            nome: "Nuvem",
            corPrimaria: "#82cffa",
            corSecundaria: "#e8f8ff"
        },
        {
            nome: "Pedra",
            corPrimaria: "#db6ebf",
            corSecundaria: "#fae9f5"
        },
        {
            nome: "Névoa Sangrenta",
            corPrimaria: "#ff8a29",
            corSecundaria: "#ffeedf"
        }
    ]

    const [ninjas, setNinjas] = useState([])
    const aoNovoNinjaAdicionado = (ninja) => {
        console.log(ninja)
        setNinjas([...ninjas, ninja])
    }

  return (
    <div className="App">
      <Banner />
      <Formulario aoNinjaCadastrado={ninja => aoNovoNinjaAdicionado(ninja)}/>
      {aldeias.map(aldeia => <Aldeia nome={aldeia.nome} key={aldeia.nome} corPrimaria={aldeia.corPrimaria} corSecundaria={aldeia.corSecundaria} />)}
    </div>
  );
}

export default App;
