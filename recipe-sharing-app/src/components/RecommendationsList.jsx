import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const favorites = useRecipeStore(state => state.favorites);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations when favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites, generateRecommendations]);

  return (
    <div style={{ 
      border: '2px solid #28a745', 
      borderRadius: '10px', 
      padding: '20px',
      backgroundColor: '#e8f5e8',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#28a745', marginBottom: '15px' }}>í¼Ÿ Recommended for You</h2>
      
      {recommendations.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          {favorites.length === 0 
            ? 'Add some favorites to get personalized recommendations!' 
            : 'No recommendations available. Try adding more diverse favorites!'}
        </p>
      ) : (
        <div>
          <p style={{ color: '#28a745', fontSize: '14px', marginBottom: '15px' }}>
            Based on your {favorites.length} favorite recipe{favorites.length !== 1 ? 's' : ''}:
          </p>
          {recommendations.map(recipe => (
            <div key={recipe.id} style={{ 
              border: '1px solid #28a745', 
              margin: '10px 0', 
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ margin: '0', flex: 1 }}>
                  <Link 
                    to={`/recipe/${recipe.id}`}
                    style={{ 
                      textDecoration: 'none', 
                      color: '#28a745'
                    }}
                  >
                    {recipe.title}
                  </Link>
                </h3>
                <FavoriteButton recipeId={recipe.id} />
              </div>
              
              <p style={{ margin: '0 0 10px 0', color: '#666' }}>
                {recipe.description.length > 80 
                  ? `${recipe.description.substring(0, 80)}...` 
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
                View Details â†’
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
