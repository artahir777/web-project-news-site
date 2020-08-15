import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"


import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Footer from './components/Footer/Footer'



import './styles/base.scss'
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={Home} />
          <Route to="/category" component= {Category}/>

        </Switch>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Category/> */}
      <Footer/>
    </div>
  );
}





export default App;
