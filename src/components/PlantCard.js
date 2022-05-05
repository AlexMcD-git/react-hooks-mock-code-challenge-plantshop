import React,{ useState } from "react";

function PlantCard({plant, handleSoldOut, pricePatch, handleDelete}) {
  const [updatedPrice, setUpdatedPrice] = useState(0)

  function handlePriceSubmit(e){
    e.preventDefault()
    pricePatch(plant.id, updatedPrice)
    setUpdatedPrice(0)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={()=>handleSoldOut(plant.id)}>In Stock</button>
      ) : (
        <button onClick={()=>handleSoldOut(plant.id)}>Out of Stock</button>
      )}
      <form onSubmit={(e)=>handlePriceSubmit(e)}> 
        <input type="number" name="price" step="0.01" placeholder="Price" value={updatedPrice} onChange={(e)=>setUpdatedPrice(parseFloat(e.target.value))}/>
        <button type="submit">Update Price</button>
      </form>
      <button onClick={()=>handleDelete(plant.id)}>Delete Item</button>

    </li>
  );
}

export default PlantCard;
