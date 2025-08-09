import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  
  const isFavorite = favorites.includes(recipeId);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleFavoriteToggle}
      style={{
        padding: '8px 16px',
        backgroundColor: isFavorite ? '#e91e63' : '#f8f9fa',
        color: isFavorite ? 'white' : '#e91e63',
        border: `2px solid #e91e63`,
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease'
      }}
    >
      {isFavorite ? '‚ù§Ô∏è Favorited' : 'Ì¥ç Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
