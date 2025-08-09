import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '400px',
        gap: '10px'
      }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ padding: '8px', fontSize: '16px' }}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          style={{ padding: '8px', fontSize: '16px', minHeight: '100px' }}
          required
        />
        <button type="submit" style={{ 
          padding: '10px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
