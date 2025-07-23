import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  
  return (
    <>
     <div className="App">
      {/*CSS global */}
        <h1>React com CSS</h1>
        {/*CSS de componente */}
        <MyComponent />
        <p>Este parágro é do App.jsx</p>
     </div>
    </>
  )
}

export default App
