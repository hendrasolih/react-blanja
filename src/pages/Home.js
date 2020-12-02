import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import CardProd from '../components/CardProd';
import CardProdPopular from '../components/CardProdPupolar';

export default class Home extends Component {
  state = {
    searchField: '',
  }
  render() {
    // const { match, location, history } = this.props;
    // console.log("Home", match, location, history);
    // console.log(this.props);
    return (
      <>
        <Navbar placeholder="Enter Product Name" handleChange={(e)=> this.setState({searchField:e.target.value})}/>
        <Carousel />
        <Category />
        <CardProd />
        <CardProdPopular />
      </>
    );
  }
}
