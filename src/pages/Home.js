import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import CardProd from '../components/CardProd';
import CardProdPopular from '../components/CardProdPupolar';

export default class Home extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log("Home", match, location, history);
    console.log(this.props);
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
