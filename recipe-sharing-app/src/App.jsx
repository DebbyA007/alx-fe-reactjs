import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        marginTop: '20px'
      }}>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
