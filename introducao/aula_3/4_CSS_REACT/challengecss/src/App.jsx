import { useState } from 'react'
import styles from "./components/CarDetails.module.css"

import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  
  const cars = [
  {id: 1, brand: "Ferrari", color: "amarela"},
  {id: 2, brand: "KIA", color: "Branco"},
  {id: 3, brand: "Renault", color: "Azul"},
]

  return (
    <>
      <div>
        <h1>Desafio 5</h1>
        {cars.map((car) =>(
          <CarDetails 
            key={car.id}
            brand={car.brand}
            color={car.color}
          />
        ))}
      </div>  
    </>
  )
}

export default App
