import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import CardProd from "../components/CardProd";
import CardProdPopular from "../components/CardProdPupolar";

export default class Home extends Component {
  state = {
    isLogin: false,
  };
  render() {
    // const { match, location, history } = this.props;
    // console.log("Home", match, location, history);
    console.log(this.props.testProps);
    return (
      <>
        <Navbar />
        <Carousel />
        <Category />
        <CardProd />
        <CardProdPopular />
      </>
    );
  }
}
