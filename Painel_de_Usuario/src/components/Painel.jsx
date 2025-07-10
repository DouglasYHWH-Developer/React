import { useState } from "react"
        
        const Painel = () => {

          const [nome, setNome] = useState("Douglas");
          const [mensagem, setMensagem] = useState(false)

          const alteraNome = () => {
            let nome = "João"
            setNome(nome)
          }

          const alteraMensagem = () =>{
            let message = "olá mundo"
            setMensagem(message)
          }

          return(
            <div>
                <h1>{nome}</h1>
                <button onClick={alteraNome}>Altera nome</button>
                <button onClick={alteraMensagem}>Altera mensagem</button>
                {mensagem && <p>Parabéns a mensagem apareceu</p>}
            </div>

          )
          
        }
        
        export default Painel;