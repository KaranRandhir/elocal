import React,{useState} from 'react';
import img from "../assets/img1.jpg"
import "./App.css"
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"
import ProductImage from './ProductImage';
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Sellers from "./Pages/Sellers"
import Navbar from "./Navbar"

const App = () => {
  return (
      <>
      <Navbar/>
      <Router>
        
    <Switch>
        
        <Route path="/productdetail" exact component={Product}/>
        <Route path="/sellers"exact component={Sellers}/>
        <Redirect to="/productdetail"/>
    </Switch>
    
  
    
    </Router>
    </>
  )
}
export default App;
