import styled from "styled-components";

const ShippingAddress = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

const Adress = styled.p`
    font-size: 14px;
    line-height: 24px;

`;

const Button = styled.button`
    width: 23%;
    height: 36px;
    border-radius: 24px;
    font-size: 14px;
    line-height: 20px;
    color: #9B9B9B;
    border: solid 1px #9B9B9B;
    background-color: white;

`;

const ShoppingSummary = styled.div`
    border-top: 1px solid #9B9B9B;
`;

export { ShippingAddress, Adress, Button, ShoppingSummary };