import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  
  const myCars =[
    {name:"Ferrari", km: 10000, color:"Branca"},
    {name:"Kia", km: 32000, color:"Cinza"},
    {name:"Renault", km: 0, color:"Preto"},
  ]

  return (
      <div className="App">
        <h1>Desafio 5</h1>
          <div className="car-container">
            {myCars.map((car) => (
              <CarDetails car={car}/>
            ))}
          </div>  
      </div>
  )
}

export default App;
