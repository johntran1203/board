import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Boards from "./screens/Boards";
import './App.css';
import AddBoard from "./screens/AddBoard";

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
        </main>
      </Switch>
    </div>
  );
}

export default App;