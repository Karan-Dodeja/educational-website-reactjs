import React from "react";
import Header from "./components/common/header/Header";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/Home/team/Team.jsx";
import Price from "./components/pricing/Price.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact Component={<Home />}></Route>
        <Route path="/about" Component={<About />}></Route>
        <Route path="/courses" Component={<CourseHome />}></Route>
        <Route path="/team" Component={<Team />}></Route>
        <Route path="/pricing" Component={<Price />}></Route>
        <Route path="/blog" Component={<Blog />}></Route>
        <Route path="/contact" Component={<Contact />}></Route>
      </Router>
    </div>
  );
};

export default App;
