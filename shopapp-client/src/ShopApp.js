import './ShopApp.css';
import Home from "./Pages/Home";
import { Fragment } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetails from "./Pages/ProductDetails";
import ShopCard from "./Pages/ShopCard";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function ShopApp() {
  return (
    <Fragment >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shopcard' element={<ShopCard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails />}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </Fragment>
  );
}

export default ShopApp;
