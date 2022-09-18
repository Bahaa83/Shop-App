import './ShopApp.css';
import Home from "./Pages/Home";
import { Fragment } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";

function ShopApp() {
  return (
    <Fragment >
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </Fragment>
  );
}

export default ShopApp;
