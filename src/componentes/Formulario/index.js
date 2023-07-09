import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

    const aldeias = [
        "Folha",
        "Areia",
        "Névoa",
        "Nuvem",
        "Pedra",
        "Névoa Sangrenta"
    ]

    const niveis = [
        "Jonin",
        "Chunin",
        "Genin",
        "ANBU",
        "Sannin",
        "Kage"
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do ninja</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <ListaSuspensa label="Nivel" itens={niveis} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Aldeia" itens={aldeias} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario