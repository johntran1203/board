import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Boards from "./screens/Boards";
import './App.css';
import AddBoard from "./screens/AddBoard";
import Orders from "./screens/Orders";
import Edit from "./screens/Edit";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/boards">
            <Boards />
          </Route>
          <Route path="/newBoard">
            <AddBoard />
          </Route>
          <Route path='/edit'>
            <Edit />
          </Route>
          <Route path='/orders'>
            <Orders />
            </Route>
        </main>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;