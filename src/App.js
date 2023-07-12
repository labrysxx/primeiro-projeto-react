import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Aldeia from "./componentes/Aldeia";

function App() {

    const aldeias = [
        {
            nome: "Folha",
            corPrimaria: "#57c278",
            corSecundaria: "#d9f7e9",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        },
        {
            nome: "Areia",
            corPrimaria: "#e06b69",
            corSecundaria: "#fde7e8",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        },
        {
            nome: "Névoa",
            corPrimaria: "#a6d157",
            corSecundaria: "#f0f8e2",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        },
        {
            nome: "Nuvem",
            corPrimaria: "#82cffa",
            corSecundaria: "#e8f8ff",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        },
        {
            nome: "Pedra",
            corPrimaria: "#db6ebf",
            corSecundaria: "#fae9f5",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        },
        {
            nome: "Névoa Sangrenta",
            corPrimaria: "#ff8a29",
            corSecundaria: "#ffeedf",
            niveis: [
                "Jonin",
                "Chunin",
                "Genin",
                "ANBU",
                "Sannin",
                "Kage"
            ]
        }
    ]

    const [ninjas, setNinjas] = useState([])
    const aoNovoNinjaAdicionado = (ninja) => {
        debugger
        setNinjas([...ninjas, ninja])
    }

  return (
    <div className="App">
      <Banner />
      <Formulario aldeias={aldeias.map(aldeia => aldeia.nome)} aoNinjaCadastrado={ninja => aoNovoNinjaAdicionado(ninja)}/>
      {aldeias.map(aldeia => <Aldeia
          nome={aldeia.nome}
          key={aldeia.nome}
          corPrimaria={aldeia.corPrimaria}
          corSecundaria={aldeia.corSecundaria}
          ninjas={ninjas.filter(ninja => ninja.aldeia === aldeia.nome)}
          nivel={ninjas.filter(ninja => aldeia.niveis.map(nivel => nivel === ninja.nivel))}
      />)}
    </div>
  );
}

export default App;
