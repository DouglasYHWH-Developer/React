import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15;
  const [name] = useState("Douglas")
  
  return (
    <>
     <div className="App">
      {/*CSS global */}
        <h1>React com CSS</h1>
        {/*CSS de componente */}
        <MyComponent />
        <p>Este parágro é do App.jsx</p>
        {/*INLINE STYLE*/}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
        {/*INLINE STYLE DINAMICO*/}
        <h2 style={
          n < 10 ? 
          ({color: "purple"}) :
          ({color: "pink"})}>
            CSS dinâmico
          </h2>
        <h2 style={
          n > 10 ? 
          ({color: "purple"}) : 
          ({color: "pink"})}>
            CSS dinâmico
        </h2>
        <h2 style={
          name === "Douglas" 
          ? ({color: "green", backgroundColor: "#000"}) 
          : null}>
            Teste dinâmico
        </h2>
     </div>
    </>
  )
}

export default App
