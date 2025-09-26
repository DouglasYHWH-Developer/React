import React from 'react'

const userName = "João";
const isLoggedIn = true;

const handleClick = () =>{
  
}

const Greeting = () => {
  return (
    <div>
      <h2>Olá, {userName}</h2>
      <h2>
        {isLoggedIn ? "Bem vindo de volta" : "Por favor, faça login."}
      </h2>
    </div>
  );
}

export default Greeting;