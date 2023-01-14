import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Ingredient from './Page/Ingredient';
import Recipe from './Page/Recipe';
import Mykitchen from './Page/Mykitchen';

function App() {
  return (
    <div className="App">
      <div style={{ margin: 20, fontSize: 25 }}>
         {/* <Link to="/">Home</Link> | */}
        <Link to="/Mykitchen">Mykitchen</Link> |
        <Link to="/Ingredient">Ingredient</Link> |
        <Link to={"/Recipe"}>Recipe</Link>
      </div>

      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mykitchen" element={<Mykitchen />} />
          <Route path="/Ingredient" element={<Ingredient />} />
          <Route path="/Recipe" element={<Recipe />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;


