import './App.css';
import firestore from "./services/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Cart from "./containers/Cart";

function App() {
  return (
    <Router >
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          {/* <Route exact path="/:id">
              <Product />
          </Route> */}
          <Route exact path="/cart">
              <Cart />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;