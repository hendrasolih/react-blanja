import { createGlobalStyle } from 'styled-components';

import Metroplolis from './metropolis.regular.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Metropolis';
        src: local('Metropolis'), url(${Metroplolis}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;