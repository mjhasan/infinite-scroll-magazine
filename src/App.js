import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Singe from './components/Single/Singe';

function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Switch>
          <Route path="/news/:id">
            <Singe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
