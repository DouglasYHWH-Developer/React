import { useState} from "react";
import "./App.css";
import City from "./assets/city.jpg"
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
const name = "Joaquim";

const cars = [
  {id: 1, brand: "Ferrari", color: "amarela", newCar: true, km: 0},
  {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
  {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
]

function showMessage(){
  console.log('Evento do compoennete pai')
}

const [userName] = useState("Maria")
  return (
    
      <div className="App">

        <h1>Avançando em React</h1>
        {/* imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem"/>
        </div>
        {/* imagem em assets */}
        <div>
          <img src={City} alt="Cidade"/>
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring props */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
        {/* loop em array de objtos */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar} 
          />
        ))}
         {/* fragment */}
        <Fragment propFragment="teste"/>
        {/* Children */}
        <Container myValues={"Testing"}>
         <p>E este é o conteudo</p>
        </Container>
        <Container myValues={"Testing"}>
         <h5>Testatndo container</h5>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
      </div>
    
  )
}

export default App;