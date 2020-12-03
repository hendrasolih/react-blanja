import styled from 'styled-components';
import { Image, Button } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import {createBreakpoint, createMap} from 'styled-components-breakpoint';
 
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint = createBreakpoint(breakpoints);


const IconStar = styled(BsFillStarFill)`
    color: #FFBA49;
`;

const Wrapper = styled.section`
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 10vh;

    ${breakpoint('lg')`
    font-size: 80%;
    margin-right: 5%;
    margin-left: 5%;
  `}
`;

const MainImg = styled(Image)`
    width: 100%;
    height: 378px;
`

const InfoProduct = styled.section`
    width: 100%;
    font-family: 'Metropolis';
`;

const ImageWrapper = styled.div`
    margin-right: 3vw;
    width: 50%;
    height: auto;
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

//background-image: url("https://i.imgur.com/HKdh9lf.jpg");

const ProductName = styled.div`
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 2vh;
`;
const BrandName = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #9B9B9B;
    margin-bottom: 2vh;
`;

const ProductRating = styled.div`
    margin-bottom: 3vh;
`;

const ProductPriceLabel = styled.div `
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #9B9B9B;
    margin-bottom: 5px;
`;

const ProducPrice = styled.div`
    font-size: 33px;
    font-weight: 700;
    margin-bottom: 2vh;
`;

const ColorLabel = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 5px;
`;

const ColorPicker = styled.input`
    margin-right: 5px;
    height: 30px;
    width: 30px;
`
// const basecolor = `
//     margin-right: 5px;
//     height: 30px;
//     width: 30px;
// `;

// const ColorPickerRed = styled.span`
//     //${basecolor}
//     background-color: red;
// `;

const ButtonCart = styled(Button)`
    width: 20%;
    height: 48px;
    border-radius: 25px;
    background-color: white;
    color: black;
    border-color: black;
    font-size: 14px;
    text-decoration: none;
`;

const ButtonBuyNow = styled(Button)`
    background-color: #DB3022;
    border-radius: 25px;
    height: 48px;
    font-size: 14px;
    width: 50%;
`

const InfoProdctText = styled.section`
    margin-top: 6vh;
    margin-right: 10%;
    margin-left: 10%;
`;

const InfoProdctTextTitle = styled.h2`
    margin-bottom: 6vh;
`;

const Condition = styled.h4`
    color: #DB3022;
    margin-bottom: 4vh;
    size: 20px;
    line-height: 20px;
`;

const TextDescrip = styled.p`
    color: #9B9B9B;

`;

const ButtonUpdateDelete = styled.button`
    background-color: #DB3022;
    color: white;
    border: none;
    border-radius: 25px;
    height: 48px;
    font-size: 14px;
    width: 25%;
    margin-top: 15px;
`;

const AiOutlinePlusCircleStyled = styled(AiOutlinePlusCircle)`
    width: 36px;
    height: 36px;
`;

const AiOutlineMinusCircleStyled = styled(AiOutlineMinusCircle)`
    width: 36px;
    height: 36px;
`;

export {Wrapper, MainImg, ImageWrapper, InfoProduct, ProductName,
     BrandName, IconStar, ProductRating, ProductPriceLabel, ProducPrice,
     ColorLabel, ColorPicker, ButtonCart, ButtonBuyNow, InfoProdctText, InfoProdctTextTitle, Condition,
     TextDescrip, ButtonUpdateDelete, AiOutlinePlusCircleStyled, AiOutlineMinusCircleStyled };