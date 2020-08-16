import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Footer from "./components/Footer/Footer";

import "./styles/base.scss";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/category/:categoryId"
            render={(routeProps) => (
              <Category categoryId={routeProps.match.params.categoryId} />
            )}
          />
          <Route
            path="/news-details/:newsId"
            render={(routeProps) => (
              <NewsDetails newsId={routeProps.match.params.newsId} />
            )}
          />
        </Switch>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Category/> */}
      <Footer />
    </div>
  );
}

export default App;
