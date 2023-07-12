import "./Aldeia.css"
import Ninja from "../Ninja";

const Aldeia = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.ninjas.length > 0) ? <section className="aldeia" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="ninjas">
                {props.ninjas.map(ninja => <Ninja corDeFundo={props.corPrimaria} key={ninja.nome} nome={ninja.nome} imagem={ninja.imagem} nivel={ninja.nivel}/>)}
            </div>
        </section>
            : ""
    )
}

export default Aldeia