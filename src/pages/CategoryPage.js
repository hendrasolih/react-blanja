import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from '../components/Navbar';
import { Wrapper, StyledCard, CardItem } from '../components/styled/Card-styled';
import { Card, Button } from 'react-bootstrap';
import {TextCategory, TypeCategory} from '../components/styled/CategoryPage-styled';
import { IconStar } from '../components/styled/Product-styled';

let getUrl = 'http://localhost:8000/products?category=';

export default class CategoryPage extends Component {
  state = {
    products: {},
    id:'',
    
  }
  
  getAllProducts = () => {
    const {match} = this.props;
    axios
      .get(getUrl + match.params.category).then(({ data })=>{
        this.setState({
          products: data,
        });
      }).catch((err) => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  deleteProduct = () =>{
    axios
    .delete('http://localhost:8000/products/').then(()=>{
      console.log('data bershasil dihapus')
    }).catch((err) => {
      console.log('Mengahapus gagal');
    })

  } 
  

  render() {
    const { products } = this.state;
    const {match} = this.props;
    // console.log(this.state.products.data.prd_id);
    // console.log(match, location, history);
    // console.log(location.pathname);
    // console.log(match.params.category);
    // console.log(this.state.products);

    return (
      <>
        <Navbar />
        <Wrapper>
        <TextCategory>
          Home &gt; category &gt; {match.params.category}
        </TextCategory>
        <TypeCategory className="font-bold">
          {match.params.category}
        </TypeCategory>
          <StyledCard >
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
            {/* <Button onClick={this.deleteProduct}>Delete</Button> */}
          </StyledCard>
        </Wrapper>
      </>
    )
  }
}
