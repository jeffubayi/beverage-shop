// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8">
      <div className="container mx-auto flex md:justify-between md:items-center">
        <div className="text-2xl font-bold hidden md:block">Beverage Shop</div>
        <div >
          <input
            type="text"
            placeholder="Search for a drink..."
            className="border rounded-lg py-2 px-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

