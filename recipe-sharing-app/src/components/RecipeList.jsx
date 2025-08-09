import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Initialize filtered recipes when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Determine which recipes to display
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {searchTerm && (
        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
          {filteredRecipes.length} recipe(s) found for "{searchTerm}"
        </p>
      )}
      
      {recipesToDisplay.length === 0 ? (
        <p>{searchTerm ? 'No recipes match your search.' : 'No recipes yet. Add some recipes to get started!'}</p>
      ) : (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ccc', 
            margin: '10px 0', 
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  textDecoration: 'none', 
                  color: '#007bff'
                }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: '0 0 10px 0', color: '#6c757d' }}>
              {recipe.description.length > 100 
                ? `${recipe.description.substring(0, 100)}...` 
                : recipe.description}
            </p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{ 
                color: '#007bff', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              View Details →
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
