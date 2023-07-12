import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {useState} from "react";

const Formulario = (props) => {

    const niveis = [
        "Jonin",
        "Chunin",
        "Genin",
        "ANBU",
        "Sannin",
        "Kage"
    ]

    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [aldeia, setAldeia] = useState("")
    const [nivel, setNivel] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoNinjaCadastrado({
            nome,
            nivel,
            imagem,
            aldeia
        })
        setNome("")
        setImagem("")
        setAldeia("")
        setNivel("")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do ninja</h2>
                <CampoTexto
                    aoAlterado={valor => setNome(valor)}
                    valor={nome}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome da(o) ninja"
                />
                <ListaSuspensa
                    aoAlterado={valor => setNivel(valor)}
                    valor={nivel}
                    obrigatorio={true}
                    label="Nivel"
                    itens={niveis}
                />
                <CampoTexto
                    aoAlterado={valor => setImagem(valor)}
                    valor={imagem}
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa
                    aoAlterado={valor => setAldeia(valor)}
                    valor={aldeia}
                    obrigatorio={true}
                    label="Aldeia"
                    itens={props.aldeias} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario