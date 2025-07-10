import React, { useState } from 'react'

const PainelVisibilidade = () => {

  const [frase, setFrase] = useState(false)

  const alteraFrase = () =>{
    setFrase(!frase)
  }

    return(
      <div>
        <button onClick={alteraFrase}>
          {frase ? 'Ocultar conteúdo':'Mostrar conteúdo'}
        </button>

        {frase && <p>A frase apareceu {frase}</p>}
      </div>
    )
}

export default PainelVisibilidade;