import styled from 'styled-components';

import {createBreakpoint} from 'styled-components-breakpoint';
 
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint = createBreakpoint(breakpoints);
  
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
    width: 100%;
    height: 300px;
    margin: 0 auto;
    //border: 4px solid purple;
    object-fit: cover;
    
    ${breakpoint('lg')`
    widht: 80%;
  `}
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
  