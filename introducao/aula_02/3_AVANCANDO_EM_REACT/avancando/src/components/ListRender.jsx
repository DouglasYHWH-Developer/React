import { use, useState } from "react"

      const ListRender = () => {
        const [list, setList] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
      
        const [users, setUsers] = useState([
          {id: 1, name: "Douglas", age: 31},
          {id: 2, name: "João", age: 28},
          {id: 3, name: "Pedro", age: 44},
        ]);

        const deleteRandom = () =>{
          const  randomNumber = Math.floor(Math.random() * 4);
          setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
          })
        };

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
            <button onClick={deleteRandom}>Delete randon user</button>
        </div>
      )
    }
    
    export default ListRender;

/*Geralemnte utilizamos '{}' no .map(). Ex.: .map((item) => {...})
Mas o jsx é considerado um objeto, por isso usamos os '()' na arraow function.alt
Ex.: .map((item) => (...))
*/