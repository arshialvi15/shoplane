import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Feed from './Components/Feed/Feed';
import LoginPage from './Components/Navbar/LoginPage/LoginPage';
import SignupPage from './Components/Navbar/SignupPage/SignupPage';
import All from './Components/Feed/All/All'
import Electronics from './Components/Feed/Electronics/Electronics';
import MensClothing from './Components/Feed/MensClothing/MensClothing';
import WomensClothing from './Components/Feed/WomensClothing/WomensClothing';
import Jewellery from './Components/Feed/Jewellery/Jewellery';
import HomePage from './Components/HomePage/HomePage';
// import Cart from './Components/Navbar/Cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  <React.StrictMode>
 <Routes>
 <Route path="/" element={<Home/>}></Route> 
  <Route path="/HomePage" element={<HomePage/>}></Route>
  <Route path="/LoginPage" element={<LoginPage/>}></Route>
  <Route path="/SignupPage" element={<SignupPage/>}></Route>
  <Route path="/Feed" element={<Feed/>}></Route>
  {/* <Route path="./Cart" element={<Cart />}></Route> */}
 <Route path="/All" element={<All />}></Route>
 <Route path="/Electronics" element={<Electronics />}></Route>
 <Route path="/Jewellery" element={<Jewellery />}></Route>
 <Route path="/MensClothing" element={<MensClothing />}></Route>
 <Route path="/WomensClothing" element={<WomensClothing />}></Route>
 </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
