import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    favorites: state.favorites.filter(favId => favId !== id)
  })),
  
  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  generateRecommendations: () => set(state => {
    // Enhanced recommendation algorithm based on favorites
    const favoriteRecipes = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id)
    );
    
    // Get recommendations based on similar keywords in favorite recipes
    const recommended = state.recipes.filter(recipe => {
      if (state.favorites.includes(recipe.id)) return false; // Don't recommend already favorited
      
      // Simple recommendation: recipes with similar words in title/description
      return favoriteRecipes.some(favorite => {
        const favoriteWords = (favorite.title + ' ' + favorite.description).toLowerCase().split(/\s+/);
        const recipeWords = (recipe.title + ' ' + recipe.description).toLowerCase().split(/\s+/);
        return favoriteWords.some(word => word.length > 3 && recipeWords.includes(word));
      });
    });
    
    return { recommendations: recommended.slice(0, 3) }; // Limit to 3 recommendations
  })
}));

export { useRecipeStore };
