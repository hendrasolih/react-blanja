import React, { useState } from "react";
import Images from "../assets/img/Images";

import {Container, ImgSelected, ImgContainer, Img} from "./styled/ImgGallery-styled";

export default function ImgGallery() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);


  return (
    <div className="App">
      <Container>
        <ImgSelected src={selectedImg} alt="Selected"/>
        <ImgContainer>
          {Images.map((img, index) => (
            <Img
              style={{ border: selectedImg === img ? "4px solid purple" : "" }}
              key={index}
              src={img}
              alt="shoes"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </ImgContainer>
      </Container>
    </div>
  );
}