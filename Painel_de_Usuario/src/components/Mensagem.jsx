const Mensagem = ({titulo, texto, myFunction}) => {
  return (
    <div>
        <h3>{titulo}</h3>
        <p>{texto}</p>
        <button onClick={myFunction}>Mostrar mensagem</button>     
    </div>
  )
}

export default Mensagem;

{/*
    const Mensagem = (props) => {
  return (
    <div>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
    </div>
  )
}

export default Mensagem
 */}