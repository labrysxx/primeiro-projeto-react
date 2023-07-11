import "./Aldeia.css"
import Ninja from "../Ninja";

const Aldeia = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className="aldeia" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="ninjas">
                {props.ninjas.map(ninja => <Ninja nome={ninja.nome} imagem={ninja.imagem} nivel={ninja.nivel}/>)}
            </div>
        </section>
    )
}

export default Aldeia