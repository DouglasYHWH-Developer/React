import FirstComponent from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'


import './App.css'


function App() {
 
  return (
    <>
      <div>
        <h1 class="App">Fundamentos React</h1>
        <p className="teste">Meu texto</p>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
      </div>
    
    </>
  )
}

export default App
