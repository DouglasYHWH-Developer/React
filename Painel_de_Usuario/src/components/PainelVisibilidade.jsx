import React, { useState } from 'react'

const PainelVisibilidade = () => {

    const[mensagem, setMensagem] = useState(false)
    const alterarMensagem = () => {
        setMensagem(!mensagem)
    }
  return (
    <div>
        <h3>{mensagem}</h3>
        <button onClick={alterarMensagem}>
            {mensagem ? "Ocultar conteúdo" : "Mostrar conteúdo"}
        </button>
        {mensagem && <p>Parabéns! A frase apareceu</p>}
    </div>

  )
}

export default PainelVisibilidade;