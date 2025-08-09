import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ 
          marginBottom: '20px', 
          padding: '8px 16px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Home
      </button>
      
      {isEditing ? (
        <EditRecipeForm 
          recipe={recipe} 
          onCancel={() => setIsEditing(false)} 
        />
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <h1 style={{ margin: 0, flex: 1 }}>{recipe.title}</h1>
            <FavoriteButton recipeId={recipe.id} />
          </div>
          
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            {recipe.description}
          </p>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsEditing(true)}
              style={{ 
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
