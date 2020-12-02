import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from "react-router-dom";

import { Card } from 'react-bootstrap';
import { Wrapper, HeadText, Text, StyledCard, CardItem } from './styled/Card-styled';
import { IconStar } from '../components/styled/Product-styled';


const getUrl = "http://localhost:8000/products?filter=new";

export default class CardProd extends Component {
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
    this.getAllProducts()
  }

  

  render() {
    const { products } = this.state;

    console.log(products);
    return (
      <>
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
      </>
    )
  }
}


// export default function CardProd() {
//   return (
//     <Wrapper>
//       <HeadText>New</HeadText>
//       <Text>You’ve never seen it before!</Text>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607299200&Signature=BsDYKJF7w2s6fNCK28mGuv-TlmHWZWvwS~qm33j2Da~kl3D8uE~~KLVvcPEPvo5H7tgie0wnJ3ZM17e9QDsXIZGNIE1XQT42loPBAms0JkTjqH8eVIluTZgSmtDr6sAhhth5GtnXOkLPXEOXTtT9LSaPbb5OaDMnZcQd6NW8I4FbwzH9A67esBOIX3Hphh7MRQsNKQVeBqeBw~9OuqJczGlm8RpW5AQpNAL-Bmqc-qVqeRCNW8cOE6591miPRd542JnZ5ZYgSmOfldQG-N6I9J9yGNzYExnn8azpyyWMITky8pgEuG4KILNam-goYyGTBOtf8fRhRuLahWV0DJK5Gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the bulk of
//           the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Wrapper>
//   )
// };
