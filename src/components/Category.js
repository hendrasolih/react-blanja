import React from 'react';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';

import { Wrapper, HeadCarousel, Tshirt, Short, Jacket, Pants, Shoes,
  Backpack, Handbag, Watch } from "./styled/Catergory-styled";


export default function Category() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <>
      <Wrapper>
        <HeadCarousel style={{ textAlign: "left" }}>Category</HeadCarousel>
        <p>What are you currently looking for</p>
        <div>
          <Carousel breakPoints={breakPoints}>
            <Tshirt className="ctg-tshirt">
            <Link to={`/category/shirt`} style={{color: "white"}}>T-shirt</Link>
            </Tshirt>
            <Short>Short</Short>
            <Jacket>Jacket</Jacket>
            <Pants>Pants</Pants>
            <Shoes>
              <Link to={`/category/shoes`} style={{color: "white"}}>Shoes</Link>
            </Shoes>
            <Backpack>Backpack</Backpack>
            <Handbag>Handbag</Handbag>
            <Watch>Watch</Watch>
          </Carousel>
        </div>
      </Wrapper>
    </>
  )
}
