import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          í½³ Recipe Sharing Application
        </h1>
        
        <Routes>
          <Route path="/" element={
            <div>
              <SearchBar />
              
              {/* Top section with Favorites and Recommendations */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px',
                marginBottom: '30px'
              }}>
                <FavoritesList />
                <RecommendationsList />
              </div>
              
              {/* Bottom section with Add Recipe and Recipe List */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '30px'
              }}>
                <AddRecipeForm />
                <RecipeList />
              </div>
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
