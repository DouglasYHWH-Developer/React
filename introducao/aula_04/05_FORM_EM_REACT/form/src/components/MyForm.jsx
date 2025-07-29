import { useState } from "react";
import styles from "./MyForm.module.css"

const MyForm = () => {
  //3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)  
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o formulário")
    console.log(name, email)
  }

  return (
    <div>
      {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Digite o seu nome" 
                  onChange={handleName}
                />
            </div>
            {/* 2 - Label envolvendo input*/}
            <label>
              <span>E-mail</span>
              {/* 4 - simplificação da manipulação */}
              <input 
                type="email" 
                name="email" 
                placeholder="Digite seu E-mail" 
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm;