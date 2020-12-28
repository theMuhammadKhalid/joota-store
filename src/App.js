import styles from "./App.module.css";
import {
  Navigation,
  Home,
  MenProducts,
  WomenProducts,
  Bag,
} from "./components/";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
      </Router>
    </div>
  );
}

export default App;
