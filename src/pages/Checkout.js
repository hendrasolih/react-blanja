import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from '../components/Navbar';

import { ItemSelect, SummaryPrice, Mybag, Wrapper,
   Item, Image, Text, Price, ButtonCheckout } from '../components/styled/MyBag-styled';

import {ShippingAddress, Adress, Button, ShoppingSummary} from '../components/styled/Checkout-styled';

export default function Checkout() {
  const pStyle = {
    color: 'gray',
    fontSize: '12px',
    lineHeight: '12px',
  };
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Mybag className="font-bold">
          Checkout
        </Mybag>
        <div className="d-flex">
          
          <ItemSelect className="w-70">
          <h6 className="font-semi-bold">Shipping Adress</h6>
            <ShippingAddress className="bg-white">
              <h6 className="font-semi-bold">Andreas Jane</h6>
              <Adress className="font-light">
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
              </Adress>
              <Button>Choose another address</Button>
            </ShippingAddress>
            <Item className="bg-white">
              <Image className="ml-5" />
              <Text>
                <p className="mb-0">Men's formal suit - Black</p>
                <p style={pStyle}>Zalora Cloth</p>
              </Text>
              <Price className="ml-auto mr-5 font-semi-bold">
                $ 20
              </Price>
            </Item>
          </ItemSelect>
          <SummaryPrice className="w-30 bg-white">
              <h6 className="mb-4">Shopping summary</h6>
              <div className="d-flex flex-column mb-4">
                <div className="d-flex">
                  <p style={{color: 'gray'}}>Total Price</p>
                  <h5 className="ml-auto">$ 40.0</h5>
                </div>
                <div className="d-flex">
                  <p style={{color: 'gray'}}>Delivery</p>
                  <h5 className="ml-auto">$ 5.0</h5>
                </div>
                <ShoppingSummary className="d-flex">
                  <h6 className="mb-4 mt-4">Shopping summary</h6>
                  <h5 className="ml-auto mt-4" style={{color: '#DB3022'}}>$ 45.0</h5>
                </ShoppingSummary>
              </div>
              <ButtonCheckout>Select payment</ButtonCheckout>
          </SummaryPrice>
        </div>
      </Wrapper>
    </>
  )
}
