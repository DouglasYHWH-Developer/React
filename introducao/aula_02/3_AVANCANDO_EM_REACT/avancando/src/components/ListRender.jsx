import { use, useState } from "react"

      const ListRender = () => {
        const [list, setList] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
      
        return (
        <div>
            <ul>
             {list.map((item) => (
                <li>{item}</li>
             )) } 
            </ul>
        </div>
      )
    }
    
    export default ListRender

/*Geralemnte utilizamos '{}' no .map(). Ex.: .map((item) => {...})
Mas o jsx é considerado um objeto, por isso usamos os '()' na arraow function.alt
Ex.: .map((item) => (...))
*/