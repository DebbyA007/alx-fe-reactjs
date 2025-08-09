import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        
        <Routes>
          <Route path="/" element={
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px',
              marginTop: '20px'
            }}>
              <AddRecipeForm />
              <RecipeList />
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
