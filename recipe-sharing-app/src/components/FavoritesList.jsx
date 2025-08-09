import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Remove any undefined recipes

  return (
    <div style={{ 
      border: '2px solid #e91e63', 
      borderRadius: '10px', 
      padding: '20px',
      backgroundColor: '#fce4ec',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#e91e63', marginBottom: '15px' }}>❤️ My Favorites ({favoriteRecipes.length})</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          No favorite recipes yet. Click the heart button on any recipe to add it to your favorites!
        </p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #e91e63', 
            margin: '10px 0', 
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: 'white'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  textDecoration: 'none', 
                  color: '#e91e63'
                }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: '0 0 10px 0', color: '#666' }}>
              {recipe.description.length > 80 
                ? `${recipe.description.substring(0, 80)}...` 
                : recipe.description}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
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
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  padding: '4px 8px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Remove ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
