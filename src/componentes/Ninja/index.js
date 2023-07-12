import "./Ninja.css"

const Ninja = (props) => {
    const css = { backgroundColor: props.corDeFundo }

    return (
        <div className="ninja">
            <div className="cabecalho" style={css}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.nivel}</h5>
            </div>
        </div>
    )
}

export default Ninja