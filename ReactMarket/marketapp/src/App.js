import './App.css';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ShopLeftSideBar from './pages/ShopLeftSideBar';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import LoginRegister from './pages/LoginRegister';
import MyAccount from './pages/MyAccount';
import Checkout from './pages/Checkout';
import WishList from './pages/WishList';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import { useState } from 'react';
function App() {

  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/shop-left-sidebar'  element={<ShopLeftSideBar />} />
          <Route path='/myaccount'  element={<MyAccount />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/checkout'  element={<Checkout />} />
          <Route path='/cartpage'  element={<CartPage />} />
          <Route path='/productdetail/:id'  element={<ProductDetail />} />
          <Route path='/wishlist'  element={<WishList />} />
          <Route path='/login-register'  element={<LoginRegister />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
