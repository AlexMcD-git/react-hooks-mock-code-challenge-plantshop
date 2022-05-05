import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleSoldOut, search, pricePatch, handleDelete}) {
  return (
    <ul className="cards">{plants.filter(plant=>plant.name.includes(search)).map(plant=><PlantCard key={plant.id} plant={plant} handleSoldOut={handleSoldOut} pricePatch={pricePatch} handleDelete={handleDelete}/>)}</ul>
  );
}

export default PlantList;
