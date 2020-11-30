import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import CategoryPage from "./CategoryPage";
import MyBag from "./MyBag";
import Checkout from "./Checkout";



export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/category/:category" component={CategoryPage} />
      <Route path="/mybag" component={MyBag} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
}

// URL/
// URL/detail