import { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
      <h1>Bem-vindo ao nosso projeto React com Vite</h1>
      <p>Esta é a nossa primeira interação com o React. Em breve, adicionaremos mais funcionalidades!</p>
      <Greeting />
    </div>
     
  )
}

export default App

console.log(this)