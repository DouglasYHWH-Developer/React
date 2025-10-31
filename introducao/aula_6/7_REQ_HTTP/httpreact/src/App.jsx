import './App.css';

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  //1 -  resgatando dados
  useEffect(() =>{
   async function fetchData(){
    const res = await fetch(url);  // faz a requisição HTTP (GET)
    const data = await res.json(); // converte o resultado em JSON
    setProducts(data);     
   }

   fetchData();

  },[]);

  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        <ul>
          {products.map((product) =>(
            <li key={product.id}>
              {product.name} - R$: {product.price}
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;


/*
🧠 Contexto geral

Você quer buscar dados de uma API (ou do json-server) e guardar esses dados no state, pra depois renderizá-los na tela.
Pra isso, precisamos de três peças:

fetch() → faz a requisição HTTP (como se fosse o “carteiro” que vai buscar os dados).

async/await → controla o tempo de espera da resposta do servidor.

useEffect() → garante que isso aconteça no momento certo (por exemplo, assim que o componente for montado). */