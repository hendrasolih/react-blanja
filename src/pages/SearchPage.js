import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { Card } from 'react-bootstrap';
import { Wrapper, HeadText, Text, StyledCard, CardItem } from '../components/styled/Card-styled';
import { IconStar } from '../components/styled/Product-styled';
import Navbar from '../components/Navbar';
import CardProd from '../components/CardProd';

const url = "http://localhost:8000/products?search="

export default class SearchPage extends Component {
    state = {
    products: {},
    searchField:"",
  }

  getAllProducts = () => {
    axios
      .get("http://localhost:8000/products?filter=new").then(({ data })=>{
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

  componentDidUpdate = () => {
    axios.get("http://localhost:8000/products?search=" + this.state.searchField)
      .then(({ data }) => {
        this.setState({
          products: data,
        })
      }).catch((err) => {
        console.log(err);
      })
  }
    
    render() {
        const { products } = this.state;
        console.log(this.state.searchField)
        return (
            <div>
                <Navbar placeholder="Enter Product Name" handleChange={(e)=> this.setState({searchField:e.target.value})}/>
                <Wrapper>
                <HeadText>New</HeadText>
                <Text>You’ve never seen it before!</Text>
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
                            <hr/>
                            <Link to={"/editproduct/" + prd_id}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                            </Link>
                            <br />
                        </CardItem>
                        )
                    }
                    )}
                    
                </StyledCard>
                </Wrapper>
            </div>
        )
    }
}