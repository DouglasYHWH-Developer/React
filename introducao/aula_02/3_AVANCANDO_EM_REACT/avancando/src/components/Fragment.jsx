import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment;

/*
    Num html geral, aquela div, poralgum motivo 
    quebraria nosso layout, não faria sentido e 
    complicaria nosso HTML. Seria um elemento semântico
    vazio que faz parte do nosso layout

    Nesse caso eu posso simpleste excluir a div e deixar 
    a tag vazia, pos os 2 elementos que estão dentro da tag 
    vazia seria será lançada dentro do elemento pai
 */