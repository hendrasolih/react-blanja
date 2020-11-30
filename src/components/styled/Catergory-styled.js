import styled from "styled-components";
import shrit from "../../assets/img/item-cat-01.png";
import short from "../../assets/img/item-cat-02.png";
import jacket from "../../assets/img/item-cat-03.png";
import pants from "../../assets/img/item-cat-04.png";
import shoes from "../../assets/img/item-cat-05.png";
import backpack from "../../assets/img/item-cat-06.png";
import handbag from "../../assets/img/item-cat-07.png";
import watch from "../../assets/img/item-cat-08.png";


const HeadCarousel = styled.h1 `
  margin-top: 60px;

`;

const Wrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008B;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;

`;

const basic = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 206px;
  margin: 0 15px;
  font-size: 30px;
  color: #fff;
  text-decoration: none;
`;

const Tshirt = styled.div`
${basic};
background-color: #CC0B04;
background-image: url(${shrit});
background-size: contain;
background-repeat: no-repeat;
`;

const Short = styled.div`
${basic}
background-color: #1C3391;
background-image: url(${short});
background-size: contain;
background-repeat: no-repeat;
`;

const Jacket = styled.div`
${basic}
background-color: #F67B02;
background-image: url(${jacket});
background-size: contain;
background-repeat: no-repeat;
`;

const Pants = styled.div`
${basic}
background-color: #E31F51;
background-image: url(${pants});
background-size: contain;
background-repeat: no-repeat;
background-position-x: 50%;
`;

const Shoes = styled.div`
${basic}
background-color: #57CD9E;
background-image: url(${shoes});
background-size: contain;
background-repeat: no-repeat;
background-position-y: 50%;
`;

const Backpack = styled.div`
${basic}
background-color: #AC50D8;
background-image: url(${backpack});
background-size: contain;
background-repeat: no-repeat;
`;

const Handbag = styled.div`
${basic}
background-color: #50C8D8;
background-image: url(${handbag});
background-size: contain;
background-repeat: no-repeat;
`;

const Watch = styled.div`
${basic}
background-color: #B5D850;
background-image: url(${watch});
background-size: contain;
background-repeat: no-repeat;
`;

export { Wrapper, HeadCarousel, Item, Tshirt, Short, Jacket, Pants, Shoes, Backpack, Handbag, Watch };