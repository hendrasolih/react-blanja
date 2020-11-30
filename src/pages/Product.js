import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import Navbar from '../components/Navbar';
import { Wrapper, ImageWrapper, InfoProduct, ProductName, BrandName, IconStar,
   ProductRating, ProductPriceLabel, ProducPrice, ColorLabel, ColorPicker, ButtonCart,
   ButtonBuyNow, InfoProdctText, InfoProdctTextTitle, Condition, textDescrip } from '../components/styled/Product-styled';
import '../components/fonts.css';
import ImgGallery from "../components/ImgGallery";
import CardProdPopular from '../components/CardProdPupolar';

const getUrl = 'http://localhost:8000/product/';

export default class Home extends Component {
    state = {
        product: {},
        i: 0,
    }

    getProduct = () => {
        const { match } = this.props;
        axios
            .get(getUrl + match.params.id)
            .then(({ data })=>{
                this.setState({
                  product: data,
                });
              }).catch((err) => {
                console.log(err);
              })
    };

    componentDidMount = () => {
        this.getProduct();
      };

    render() {
        const { product } = this.state;

        console.log(product);

      return (
        <>
          <Navbar />
          {product.data && product.data.map(
              ({ prd_name, prd_id, prd_brand, prd_price, prd_description, prd_rating }) => {
                  return(
                    <>
                      {/* <h1 key={prd_id}> {prd_name} </h1> */}
                        <Wrapper key={prd_id} className="d-flex">
                          <ImageWrapper>
                            <ImgGallery/>
                          </ImageWrapper>
                          <InfoProduct className="fonts-regular">
                              <ProductName className="font-semi-bold">{prd_name}</ProductName>
                              <BrandName>{prd_brand}</BrandName>
                              <ProductRating><IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>(5)</ProductRating>
                              <ProductPriceLabel>Price</ProductPriceLabel>
                              <ProducPrice className="font-bold">Rp.{prd_price}</ProducPrice>
                              <ColorLabel>Color</ColorLabel>
                              <div className="">
                                <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
                                <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option2" aria-label="..."/>
                                <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option3" aria-label="..."/>
                              </div>
                              <div className="d-flex justify-content-between w-50">
                                <div className="d-flex flex-column">
                                  <div>Size</div>
                                  <div>
                                    <AiOutlineMinusCircle/> 28 <AiOutlinePlusCircle />
                                  </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <div>Jumlah</div>
                                    <div>
                                      <AiOutlineMinusCircle/> 1 <AiOutlinePlusCircle />
                                    </div>
                                </div>
                              </div>
                              <div className="mt-3">
                                  <ButtonCart className="mr-3 btn-info-product">Chat</ButtonCart>
                                  <ButtonCart className="mr-3 btn-info-product">Add Bag</ButtonCart>
                                  <ButtonBuyNow className="mr-3 btn-info-product-buy">Buy Now</ButtonBuyNow>
                              </div>
                          </InfoProduct>
                        </Wrapper>
                        <InfoProdctText>
                            <InfoProdctTextTitle className="font-semi-bold">Infomasi Produk</InfoProdctTextTitle>
                            <h3 className="mb-0 font-semi-bold">Condition</h3>
                            <Condition className="font-semi-bold">New</Condition>
                            <h3 className="font-semi-bold">Description</h3>
                            <textDescrip>{prd_description}</textDescrip>
                            <InfoProdctTextTitle className="font-semi-bold mt-5 ">Product review</InfoProdctTextTitle>
                            <div>
                              <h1>{prd_rating}</h1>
                              <IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>
                            </div>
                        </InfoProdctText>
                        <CardProdPopular />
                    </>

                  )
              }
          )}
          
          {/* <Wrapper className="d-flex">
            <ImageWrapper>
              <ImgGallery />
            </ImageWrapper>
            <InfoProduct className="fonts-regular">
                <ProductName className="font-semi-bold">Baju Muslim Pria</ProductName>
                <BrandName>Zalora Cloth</BrandName>
                <ProductRating><IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>(5)</ProductRating>
                <ProductPriceLabel>Price</ProductPriceLabel>
                <ProducPrice className="font-bold">$ 20.0</ProducPrice>
                <ColorLabel>Color</ColorLabel>
                <div className="">
                  <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
                  <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option2" aria-label="..."/>
                  <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option3" aria-label="..."/>
                </div>
                <div className="d-flex justify-content-between w-50">
                  <div className="d-flex flex-column">
                    <div>Size</div>
                    <div>
                      <AiOutlineMinusCircle/> 28 <AiOutlinePlusCircle />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                      <div>Jumlah</div>
                      <div>
                        <AiOutlineMinusCircle/> 1 <AiOutlinePlusCircle />
                      </div>
                  </div>
                </div>
                <div className="mt-3">
                    <ButtonCart className="mr-3 btn-info-product">Chat</ButtonCart>
                    <ButtonCart className="mr-3 btn-info-product">Add Bag</ButtonCart>
                    <ButtonBuyNow className="mr-3 btn-info-product-buy">Buy Now</ButtonBuyNow>
                </div>
            </InfoProduct>
          </Wrapper>
          <InfoProdctText>
              <InfoProdctTextTitle className="font-semi-bold">Infomasi Produk</InfoProdctTextTitle>
              <h3 className="mb-0 font-semi-bold">Condition</h3>
              <Condition className="font-semi-bold">New</Condition>
              <h3 className="font-semi-bold">Description</h3>
              <textDescrip>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textDescrip>
              <InfoProdctTextTitle className="font-semi-bold mt-5 ">Product review</InfoProdctTextTitle>
              <div>
                <h1>5.0</h1>
                <IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>
              </div>
          </InfoProdctText>
          <CardProdPopular /> */}
        </>
      );
    }
  }



