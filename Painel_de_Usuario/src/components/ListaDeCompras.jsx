import React, { useState } from 'react'

const ListaDeCompras = () => {

  const [listaDeCompras, setListaDeCompras] = useState(["Arroz", "Feijão", "Macarrão"])
  const removeItem = () => {
    setListaDeCompras((item) => {
      return item.slice(0, -1)
    })
  } 

  return(
    <div>
      <ul>
        {listaDeCompras.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={removeItem}>
          Remover último item
      </button>
      {!listaDeCompras.length && <p>Lista vazia</p>}
    </div>
  )

}

export default ListaDeCompras;