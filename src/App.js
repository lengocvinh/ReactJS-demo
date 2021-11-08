import React, { useState } from "react";
import "./App.css";
import Nav from "./views/Nav";
import Covid from "./views/Covid";
import Countdown from "./views/Countdown";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/Timer">
            <Countdown />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
