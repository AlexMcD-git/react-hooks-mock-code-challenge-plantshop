import React, {useState} from "react";

function NewPlantForm({handleNewPlant}) {
  const [newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price:0,
    inStock:true
  })

  function onFormChange(event){
    setNewPlant(prevState=>{
      return event.target.name==='price'?
       {...prevState, [event.target.name]:parseFloat(event.target.value)}:
       {...prevState, [event.target.name]:(event.target.value)}
       

    })
  }

  function onPlantSubmit(e){
    e.preventDefault()
    handleNewPlant(newPlant)
    setNewPlant({
      name:"",
      image:"",
      price:0,
      inStock:true
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>onPlantSubmit(e)}> 
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={onFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={onFormChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={onFormChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
