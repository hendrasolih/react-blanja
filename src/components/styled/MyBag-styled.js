import styled from "styled-components";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Mybag = styled.div`
    font-size: 34px;
    line-height: 34px;
    margin-bottom: 30px;
`;

const ItemSelect = styled.div`
    width: 70%;
    margin-right: 5%;
`;
const SummaryPrice = styled.div`
    width: 25%;
    height: 60%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Wrapper = styled.div`
    margin-right: 10%;
    margin-left:10%;
    margin-top: 50px;
`;

const SelectAllItems = styled.div`
    height: 64px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
`;

const Item = styled.div`
    height: 126px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
`;


const CheckBoxWrap = styled.div`
    font-size: 16px;
    line-height: 16px;
`;

const Delete = styled.div`
    color: #DB3022;
    font-size: 16px;
    line-height: 16px;
`;

const IconMinus = styled(AiFillMinusCircle)`
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-right: 1%;
`;

const IconText = styled.p`
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 2px;
`;

const IconPlus = styled(AiFillPlusCircle)`
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-left: 1%;
`;

const Image = styled.div`
    width: 70px;
    height: 69px;
    background-image: url(${"https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
    border-radius: 5px;
    margin-right: 20px;
`;

const Text = styled.div`
    width: 35%;
    height: 40px;
`;

const Price = styled.div`
    font-size: 16px;
    line-height: 16px;
`;

const Button = styled.button`
    background-color: #DB3022;
    border: none;
    border-radius: 24px;
    height: 36px;
    font-size: 14px;
    line-height: 20px;
    color: white;

`;

const ButtonCheckout = styled.button`
    background-color: #DB3022;
    border: none;
    border-radius: 24px;
    height: 36px;
    font-size: 14px;
    line-height: 20px;
    color: white;
`;


export { ItemSelect, SummaryPrice, Mybag, Wrapper, SelectAllItems,
    Item, CheckBoxWrap, Delete, IconMinus, IconPlus, Image, Text,
    IconText, Price, Button, ButtonCheckout };