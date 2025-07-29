import './App.css'
import MyForm from './components/myForm'

function App() {
  

  return (
    <>
    <div className="App">
      <h2>Form</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com "}}/>
    </div>
      
    </>
  )
}

export default App
