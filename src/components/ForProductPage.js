import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Wrapper, ImageWrapper, InfoProduct, ProductName, BrandName, IconStar,
   ProductRating, ProductPriceLabel, ProducPrice, ColorLabel, ColorPicker, ButtonCart,
   ButtonBuyNow, InfoProdctText, InfoProdctTextTitle, Condition, TextDescrip, ButtonUpdateDelete,
   AiOutlinePlusCircleStyled, AiOutlineMinusCircleStyled } from './styled/Product-styled';
import './fonts.css';
import ImgGallery from "./ImgGallery";


export default function ForProductPage(props) {
  const [counter, setCounter] = useState(0);

  const increment = () =>{
    setCounter(prev => prev + 1);
  }
  const decrement = () => {
    if(counter !== 0){
      setCounter(prev => prev - 1);
    }
  }

  

  return (
    <>
      <Wrapper  className="d-flex">
        <ImageWrapper>
          <ImgGallery/>
        </ImageWrapper>
        <InfoProduct className="fonts-regular">
            <ProductName className="font-semi-bold">{props.name}</ProductName>
            <BrandName>{props.brand}</BrandName>
            <ProductRating><IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>(5)</ProductRating>
            <ProductPriceLabel>Price</ProductPriceLabel>
            <ProducPrice className="font-bold">Rp. {props.price}</ProducPrice>
            <ColorLabel>Color</ColorLabel>
            <div className="">
              <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
              <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option2" aria-label="..."/>
              <ColorPicker type="radio" name="blankRadio" id="blankRadio1" value="option3" aria-label="..."/>
            </div>
            <div className="d-flex justify-content-between w-50">
              <div className="d-flex flex-column">
                <div>Size</div>
                <div className="d-flex">
                  <AiOutlineMinusCircleStyled/>
                    <h5 className="pl-2 pr-2 pt-1"> 28 </h5>
                  <AiOutlinePlusCircleStyled />
                </div>
              </div>
              <div className="d-flex flex-column">
                  <div>Jumlah</div>
                  <div className="d-flex">
                    <AiOutlineMinusCircleStyled onClick={decrement}/>
                      <h5 className="pl-2 pr-2 pt-1">{counter}</h5>
                    <AiOutlinePlusCircleStyled onClick={increment}/>
                  </div>
              </div>
            </div>
            <div className="mt-3">
              <ButtonCart className="mr-3 btn-info-product">Chat</ButtonCart>
              <ButtonCart className="mr-3 btn-info-product">Add Bag</ButtonCart>
              <ButtonBuyNow className="mr-3 btn-info-product-buy">Buy Now</ButtonBuyNow>
              <Link to="/">
                <ButtonUpdateDelete onClick={props.delete} className="mr-3 btn-info-product-buy">Delete</ButtonUpdateDelete>
              </Link>
            </div>
        </InfoProduct>
      </Wrapper>
      <InfoProdctText>
        <InfoProdctTextTitle className="font-semi-bold">Infomasi Produk</InfoProdctTextTitle>
        <h3 className="mb-0 font-semi-bold">Condition</h3>
        <Condition className="font-semi-bold">New</Condition>
        <h3 className="font-semi-bold">Description</h3>
        <TextDescrip>{props.description}</TextDescrip>
        <InfoProdctTextTitle className="font-semi-bold mt-5 ">Product review</InfoProdctTextTitle>
        <div>
        <h1>{props.rating}</h1>
          <IconStar/><IconStar/><IconStar/><IconStar/><IconStar/>
        </div>
      </InfoProdctText> 
    </>
  )
}
