import React from "react";
import Header from "./components/common/header/Header";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact Component={<Home />}></Route>
        <Route path="/about" Component={<About />}></Route>
        <Route path="/courses" Component={<CourseHome />}></Route>
      </Router>
    </div>
  );
};

export default App;
