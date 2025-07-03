import { use, useState } from "react"

      const ListRender = () => {
        const [list, setList] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
      
        const [users] = useState([
          {id: 1, name: "Douglas", age: 31},
          {id: 72378423, name: "João", age: 28},
          {id: 8328823, name: "Pedro", age: 44},
        ])

        return (
        <div>
            <ul>
             {list.map((item, i) => (
                <li key={i}>{item}</li>
             )) } 
            </ul>
            <ul>{/*tente usar sempre esse modelo */}
              {users.map((user) =>(
                <li key={user.id}>
                  {user.name} - {user.age}
                </li>
              ))}
            </ul>
        </div>
      )
    }
    
    export default ListRender;

/*Geralemnte utilizamos '{}' no .map(). Ex.: .map((item) => {...})
Mas o jsx é considerado um objeto, por isso usamos os '()' na arraow function.alt
Ex.: .map((item) => (...))
*/