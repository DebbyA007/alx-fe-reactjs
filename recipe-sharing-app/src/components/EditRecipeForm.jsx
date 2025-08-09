import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onCancel }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && description.trim()) {
      updateRecipe(recipe.id, { title, description });
      alert('Recipe updated successfully!');
      if (onCancel) {
        onCancel();
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '500px',
        gap: '15px'
      }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ 
            padding: '12px', 
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          style={{ 
            padding: '12px', 
            fontSize: '16px', 
            minHeight: '120px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'vertical'
          }}
          required
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ 
            padding: '12px 24px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            flex: 1
          }}>
            Update Recipe
          </button>
          <button type="button" onClick={onCancel || (() => navigate('/'))} style={{ 
            padding: '12px 24px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            flex: 1
          }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;
