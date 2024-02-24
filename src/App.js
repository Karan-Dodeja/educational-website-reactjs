import React from "react";
import Header from "./components/common/header/Header";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/" exact Component={<Home />}></Route>
      </Router>
    </div>
  );
};

export default App;
