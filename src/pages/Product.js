import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import Navbar from '../components/Navbar';
import '../components/fonts.css';
import CardProdPopular from '../components/CardProdPupolar';
import ForProductPage from '../components/ForProductPage';

const getUrl = 'http://localhost:8000/product/';
const getUrlSize = 'http://localhost:8000/size/';
const getUrlColor = 'http://localhost:8000/color/';
const deleteUrl = 'http://localhost:8000/products/';

export default class Product extends Component {
    state = {
        product: {},
        size: {},
        color: {},
        isDeleted: false,
    }

    getProduct = () => {
        const { match } = this.props;
        axios
            .get(getUrl + match.params.id)
            .then(({ data })=>{
                this.setState({
                  product: data.data[0],
                });
              }).catch((err) => {
                console.log(err);
              })
    };

    getSize = () => {
      const { match } = this.props;
      axios
          .get(getUrlSize + match.params.id)
          .then(({ data })=>{
              this.setState({
                size: data,
              });
            }).catch((err) => {
              console.log(err);
            })
  };

  getColor = () => {
    const { match } = this.props;
    axios
        .get(getUrlColor + match.params.id)
        .then(({ data })=>{
            this.setState({
              color: data,
            });
          }).catch((err) => {
            console.log(err);
          })
};

  deleteProduct = () => {
    const { match } = this.props;
    axios
        .delete(deleteUrl + match.params.id)
        .then(()=>{
          console.log("Hapus Data Berhasil")
          }).catch((err) => {
            console.log(err);
          })
  };


    componentDidMount = () => {
        this.getProduct();
        this.getSize();
        this.getColor();
      };


    render() {
        const { product } = this.state;
        const { match, location, history } = this.props;
        const { size } = this.state;
        console.log(match, location, history);
        console.log(this.state.isDeleted);
        console.log(this.state.product);

      return (
        <>
          <Navbar />
          <ForProductPage key={product.prd_id} name={product.prd_name} brand={product.prd_brand}
          price={product.prd_price} description={product.prd_description} rating={product.prd_rating} delete={this.deleteProduct}/>
          <CardProdPopular />
        </>
      );
    }
  }



