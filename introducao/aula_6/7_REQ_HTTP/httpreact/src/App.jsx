import './App.css';

import { useState, useEffect } from 'react';


//4- custom hook
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]); // da aula 1
// 4 - custom hooks
  const {data: items, httpConfig, loading} = useFetch(url);

  const [name, setName] = useState(""); // da aula 2
  const [price, setPrice] = useState(""); // da aula 2

  //1 -  resgatando dados
  /*useEffect(() =>{
   async function fetchData(){
    const res = await fetch(url);  // faz a requisição HTTP (GET)
    const data = await res.json(); // converte o resultado em JSON
    setProducts(data);     
   }

   fetchData();

  },[]);*/

  //2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
     name, // name: name
     price, // price : price
    };
   /*
    
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

// 3- carregamento dinâmico

  const addedProduct = await res.json();

  setProducts((prevProducts) => [...prevProducts, addedProduct])
    */

  //5- refatorando post
  httpConfig(product, "POST")
  
  setName("");
  setPrice("");

  };

  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        <ul>
          {items && items.map((product) =>(
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input 
                type="text" 
                value={name} 
                name="name" 
                onChange={(e) => setName(e.target.value)}
              />
            </label>
             <label>
              Preço:
              <input 
                type="number" 
                value={price} 
                name="price" 
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="criar"/>
          </form>
        </div>
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