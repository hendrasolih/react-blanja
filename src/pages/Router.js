import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import CategoryPage from "./CategoryPage";
import MyBag from "./MyBag";
import Checkout from "./Checkout";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";



export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/category/:category" component={CategoryPage} />
      <Route path="/mybag" component={MyBag} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/editproduct/:id" component={EditProduct} />
    </BrowserRouter>
  );
}

// URL/
// URL/detail