import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe? This action cannot be undone.')) {
      deleteRecipe(recipeId);
      alert('Recipe deleted successfully!');
      navigate('/');
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
