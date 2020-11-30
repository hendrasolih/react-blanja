import styled from 'styled-components';

  
  // .App {
  //   width: 100%;
  //   min-height: 100vh;
  //   background: #1c1e27;
  //   display: flex;
  // }
  
  const img = `
  display: block;
  cursor: pointer;
  `;

  // img {
  //   display: block;
  //   cursor: pointer;
  // }
  const Container = styled.div`
    margin: auto;
    width: 100%;
    max-width: 540px;
  `;
 
  const ImgSelected = styled.img`
    ${img};
    width: auto;
    height: 300px;
    margin: 0 auto;
    //border: 4px solid purple;
    object-fit: cover;
  `;

  const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0 0 0;
  `;
  
  const Img = styled.img`
    ${img};
    width: 100px;
    height: 100px;
    margin: 5px 0;
  
  `;

  export {Container, ImgSelected, ImgContainer, Img};
  