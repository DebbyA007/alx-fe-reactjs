import React from 'react';
import { useRecipeStore } from './recipeStore';

const FilterBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  const clearSearch = () => {
    setSearchTerm('');
    filterRecipes();
  };

  return (
    <div style={{ 
      display: 'flex', 
      gap: '10px', 
      alignItems: 'center',
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes by title or description..."
        onChange={handleSearchChange}
        style={{
          flex: 1,
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #007bff',
          borderRadius: '8px',
          outline: 'none'
        }}
      />
      {searchTerm && (
        <button 
          onClick={clearSearch}
          style={{
            padding: '12px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterBar;
