// src/components/DrinksList.js
import React, { useState, useEffect } from 'react';
import DrinkCard from './DrinkCard';

const DrinksList = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => {
        setDrinks(data.drinks.slice(0, 5)); // Display only 5 drinks
        setLoading(false);
      });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        drinks.map((drink, index) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))
      )}
    </div>
  );
};

export default DrinksList;


