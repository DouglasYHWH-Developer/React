import { useState } from "react"
        
        const Painel = () => {

            const [nome, setNome] = useState("Douglas")
            const [mensagem, setMensagem] = useState(false)

            const alterarNome = () =>{
                setNome('Novo usuário')
            }

            const alterarMensagem = () =>{
                setMensagem(!mensagem)
            }

          return (
            <>
               <h1>{nome} </h1>
               <button onClick={alterarNome}>Alterar nome</button>
               <button onClick={alterarMensagem}>
                    {mensagem ? "Ocultar mensagem" :"Mostrar mensagem"}
               </button>
               {mensagem && <p>Você está aprendendo React!</p>}
            </>
          )
        }
        
        export default Painel