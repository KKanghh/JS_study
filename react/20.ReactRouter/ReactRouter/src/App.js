import { Route } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
