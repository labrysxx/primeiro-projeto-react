import "./Aldeia.css"

const Aldeia = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className="aldeia" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Aldeia