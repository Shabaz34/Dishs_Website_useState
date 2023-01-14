import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Recipe from "./Page/Recipe";
import Ingredient from "./Page/Ingredient";
import Home from "./Page/Home";



function App() {


  return (
    
      <div className="App">
        <div style={{ margin: 20, fontSize: 25 }}>
          <Link to="/">My Recipes</Link> |{"   "}
          <Link to="/Ingredient">Ingredient</Link>|{"   "}
          <Link to="/Recipe">Recipe</Link>
        </div>
        <br />

        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Ingredient" element={<Ingredient />} />
            <Route path="/Recipe" element={<Recipe />} />
          </Routes>
        </header>
      </div>
  );
}

export default App;
