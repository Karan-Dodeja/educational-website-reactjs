import React from "react";
import Header from "./components/common/header/Header";
import { Route, Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
};

export default App;
