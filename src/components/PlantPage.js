import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleNewPlant, handleSoldOut, searchChange, search, pricePatch, handleDelete}) {
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search searchChange={searchChange} search={search}/>
      <PlantList plants={plants} handleSoldOut={handleSoldOut} search={search} pricePatch={pricePatch} handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
