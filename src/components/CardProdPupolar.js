import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from "react-router-dom";

import { Card } from 'react-bootstrap';
import { IconStar } from '../components/styled/Product-styled';
import { Wrapper, HeadText, Text, StyledCard, CardItem } from './styled/Card-styled';


const getUrl = "http://localhost:8000/products?filter=rating";

export default class CardProdPopular extends Component {
  state = {
    products: {},
  }

  getAllProducts = () => {
    axios
      .get(getUrl).then(({ data })=>{
        this.setState({
          products: data,
        });
      }).catch((err) => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.getAllProducts();
  }

  

  render() {
    const { products } = this.state;
    const { id } = this.props;
    // console.log(id);

    // console.log(products);
    return (
      <>
        <Wrapper>
          <HeadText>Popular</HeadText>
          <Text>Find clothes that are trending recently</Text>
          <StyledCard>
            {products.data && products.data.map(
              ({ prd_id, prd_brand, prd_name, prd_image, prd_price  }) => {
                return(
                  <CardItem key={prd_id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prd_image} />
                    <Card.Body>
                    <Card.Title><Link to={`/product/${prd_id}`} style={{color: "black"}}>
                      {prd_name}</Link></Card.Title>
                      <Card.Text>
                          $ {prd_price}
                      </Card.Text>
                      <Card.Text>
                          {prd_brand}
                      </Card.Text>
                      <IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>
                    </Card.Body>
                  </CardItem>
                )
              }
            )}
          </StyledCard>
        </Wrapper>
      </>
    )
  }
}