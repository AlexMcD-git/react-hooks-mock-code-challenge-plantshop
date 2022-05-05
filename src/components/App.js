import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  function searchChange(e){
    setSearch(e.target.value)
  }

  useEffect(()=>fetch('http://localhost:6001/plants')
  .then(r=>r.json())
  .then(data=>{
    setPlants(data.map(plant=>{
      return {...plant, inStock:true}}))
  }),[]
  )

  function handleNewPlant(plant){
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(plant)
    })
    .then(r=>r.json())
    .then(data=>setPlants(prevState=>[...prevState, data]))
  }

  function handleSoldOut(id){
      setPlants([...plants].map(plant=>{
        return plant.id===id?{...plant, inStock:!plant.inStock}: plant
      }))
  }

  function pricePatch(id, price){
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "price":price
      })
    })
    .then(r=>r.json())
    .then(data=>setPlants([...plants].map(plant=>{
      return plant.id===id?{...data, inStock:plant.inStock}:plant
    })))
  }

    function handleDelete(id){
      fetch(`http://localhost:6001/plants/${id}`,{
      method:"DELETE"
    }).then(`Item ${id} deleted.`)
    .then(setPlants([...plants].filter(plant=>{
      return plant.id!==id
    })))
  }

  return (
    <div className="app">
      <Header searchChange={searchChange}/>
      <PlantPage plants={plants} handleNewPlant={handleNewPlant} handleSoldOut={handleSoldOut} searchChange={searchChange} search={search} pricePatch={pricePatch} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
