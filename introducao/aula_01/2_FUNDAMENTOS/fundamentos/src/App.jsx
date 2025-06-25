import FirstComponent from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'



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
        <Events />
      </div>
    </>
  )
}

export default App
