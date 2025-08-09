import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #007bff',
          borderRadius: '8px',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default SearchBar;
