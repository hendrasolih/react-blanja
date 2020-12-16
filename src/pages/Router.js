import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./Home";
import Product from "./Product";
import CategoryPage from "./CategoryPage";
import MyBag from "./MyBag";
import Checkout from "./Checkout";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Search from "./SearchPage";
import Login from "./Login";
import Signup from "./Signup";
import Resetpassword from "./Resetpassword";
import KonfirmasiPassword from "./KonfirmasiPassword";

import PrivateRoute from "../components/PrivateRoute";

import store from "../redux/store";

//component={() => <PropsPage title={`Props through component`} />}

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/product/:id" component={Product} />
        {/* <Route path="/product/:id" component={Product} /> */}
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/mybag" component={MyBag} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/editproduct/:id" component={EditProduct} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/resetpassword" component={Resetpassword} />
        <Route path="/konfirmasipassword" component={KonfirmasiPassword} />
      </BrowserRouter>
    </Provider>
  );
}
