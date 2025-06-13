import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World com Vite</h1>
      <p>O jeito mais comum e mais rápido seria usar o comando npm create vite@latest
    Depois de seguir as opções disponíveis 
    rode o projeto com npm run dev</p>
    </>
  )
}

export default App
