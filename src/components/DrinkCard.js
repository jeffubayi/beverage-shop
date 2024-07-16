// src/components/DrinkCard.js
import React from 'react';

const DrinkCard = ({ drink, isOpen, toggleAccordion }) => {
  // Extract ingredients and measures from the drink object
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (drink[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: drink[`strIngredient${i}`],
        measure: drink[`strMeasure${i}`] || '',
      });
    }
  }

  return (
    <div className="relative border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-300 h-auto overflow-hidden">
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-52 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-4 text-gray-800">{drink.strDrink}</h3>
      <p className="text-gray-600 mt-2"><strong>Category:</strong> {drink.strCategory}</p>
      <p className="text-gray-600"><strong>Glass:</strong> {drink.strGlass}</p>
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
        onClick={toggleAccordion}
      >
        {isOpen ? 'Show Less' : 'Show More'}
      </button>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-white p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="mt-4">
          <p className="text-gray-600"><strong>Alcoholic:</strong> {drink.strAlcoholic}</p>
          {drink.strTags && (
            <p className="text-gray-600"><strong>Tags:</strong> {drink.strTags.split(',').join(', ')}</p>
          )}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Ingredients:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {ingredients.map((item, index) => (
                <li key={index}>{item.measure} {item.ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Instructions:</h4>
            <p className="text-gray-700">{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;





