import { useDispatch } from "react-redux";
import { fetchProducts, fetchCart } from "./states/actions.js";

import styles from "./App.module.css";

import {
  Navigation,
  Home,
  MenProducts,
  WomenProducts,
  Bag,
  Footer,
} from "./components/";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());
  dispatch(fetchCart());

  return (
    <div className={styles.container}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/men">
            <MenProducts />
          </Route>
          <Route path="/women">
            <WomenProducts />
          </Route>
          <Route path="/bag">
            <Bag />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
