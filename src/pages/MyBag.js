import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from '../components/Navbar';
//import { Wrapper } from '../components/styled/Card-styled';
import { ItemSelect, SummaryPrice, Mybag, Wrapper,
  SelectAllItems, Item, CheckBoxWrap, Delete, IconMinus, IconPlus,
  Image, Text, IconText, Price, Button } from '../components/styled/MyBag-styled';

export default function MyBag() {
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
          My bag
        </Mybag>
        <div className="d-flex">
          <ItemSelect className="w-70">
            <SelectAllItems className="bg-white">
              <CheckBoxWrap className="">
                <input type="checkbox" name="allItems" className="mr-2 ml-3"/>
                <label for="vehicle3">Select all items <span style={{color: 'gray'}}>(2 items selected)</span></label>
              </CheckBoxWrap>
              <Delete className="ml-auto mr-3 font-semi-bold">
                Delete
              </Delete>
            </SelectAllItems>
            <Item className="bg-white">
              <input type="checkbox" name="Item" className="mr-2 ml-3"/>
              <Image/>
              <Text>
                <p className="mb-0">Men's formal suit - Black</p>
                <p style={pStyle}>Zalora Cloth</p>
              </Text>
              <IconMinus className="ml-auto"/>
                <IconText>1</IconText>
              <IconPlus className="mr-5"/>
              <Price className="ml-5 mr-3 font-semi-bold">
                $ 20
              </Price>
            </Item>
            <Item className="bg-white mt-3">
              <input type="checkbox" name="Item" className="mr-2 ml-3"/>
              <Image/>
              <Text>
                <p className="mb-0">Men's formal suit - Black</p>
                <p style={pStyle}>Zalora Cloth</p>
              </Text>
              <IconMinus className="ml-auto"/>
                <IconText>1</IconText>
              <IconPlus className="mr-5"/>
              <Price className="ml-5 mr-3 font-semi-bold">
                $ 20
              </Price>
            </Item>
          </ItemSelect>
          <SummaryPrice className="w-30 bg-white">
              <h6 className="mb-4">Shopping summary</h6>
              <div className="d-flex mb-4">
                <p style={{color: 'gray'}}>Total Price</p>
                <h5 className="ml-auto">$ 40.0</h5>
              </div>
              <Button>Buy</Button>
          </SummaryPrice>
        </div>
      </Wrapper>

    </>
  )
}
