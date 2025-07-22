import { useState } from "react";
const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([
        "Estudar react",
        "Fazer exercício",
        "Ler livro",
    ]);

    const removeList = () => {
        setTarefas((item) => {
            return item.slice(0, -1)
        })
    }

  return (
    <div>
       <ul>
        {tarefas.map((item, i) => (
            <li key={i}>{item}<button onClick={removeList}>remove</button></li>
        ))}
        {!tarefas.length && <p>Lista vazia</p>}
       </ul>
       
    </div>
  )
}

export default ListaTarefas;