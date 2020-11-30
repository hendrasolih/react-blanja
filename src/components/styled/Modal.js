import styled from "styled-components";

const baseColor = `
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
`;

const ColorBlack = styled.button`
    ${baseColor};
    background-color:  black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const ColorWhite = styled.button`
    ${baseColor};
    background-color:  white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ColorThree = styled.button`
    ${baseColor};
    background-color:  #B82222;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

const ColorFour = styled.button`
    ${baseColor};
    background-color:  #BEA9A9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

const ColorFive = styled.button`
    ${baseColor};
    background-color:  #DB3022;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

const ColorSix = styled.button`
    ${baseColor};
    background-color:  #151867;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Size = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: white;
    color: black;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SizePicked = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: #DB3022;
    color: black;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Category = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    background-color: white;
    border: none;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CategoryPicked = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    background-color: #DB3022;
    border: none;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ModalButton = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    color: black !important;
    width: 200px;
    height: 36px;
`;

const ModalButtonPicked = styled.button`
    background-color: #DB3022;
    border: 1px solid black;
    border-radius: 8px;
    color: black !important;
    width: 200px;
    height: 36px;
`;




export {ColorWhite, ColorBlack, ColorThree, ColorFour, ColorFive, ColorSix,
    Size, SizePicked, Category, CategoryPicked, ModalButton, ModalButtonPicked };