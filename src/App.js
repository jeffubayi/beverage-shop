// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DrinkCard from "./components/DrinkCard";
import DrinksList from "./components/DrinksList";

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSearch = (query) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks || []));
  };
  console.log(`DRINKS  ==>`, drinks);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {drinks.length === 0 ? (
        <DrinksList />
      ) : (
        <div className="container mx-auto m-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {drinks.map((drink, index) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
