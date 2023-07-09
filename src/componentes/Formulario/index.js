import './Formulario.css'
import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do ninja</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Classe" placeholder="Digite o nome da sua classe"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario