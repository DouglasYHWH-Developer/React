import React from 'react'


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

function TodoList() {
  return (
    <>  
        <h1>Hedy Lamarr's Todos</h1>
        <img
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
            className="photo"
        />

        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>mprove spectrum technology</li>
        </ul>
        <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
        </div>
    </>
  )
}

export default TodoList