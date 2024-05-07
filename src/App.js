import React from "react";
import Home from "./Home";
import About from "./About";
import './css/mega.css';
import './css/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Billing from "./Billing";
import Listing from "./Listing";
import User_address from './Billing_checkout/User_address';
import Bedroom_category from "./Bedroom_category";
import Sofa_category from "./Sofa_category";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path='/list' element={<Listing/>}/>
      <Route path="/billing" element={<Billing/>} />
      <Route path="/user_address" element={<User_address/>} />
      <Route path="/bedroom" element={<Bedroom_category/>} />
      <Route path="/sofa" element={<Sofa_category/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
