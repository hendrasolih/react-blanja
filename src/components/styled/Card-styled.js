import styled from "styled-components";
import { Card } from "react-bootstrap";

const Wrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    height: auto;
`;

const StyledCard = styled.div`
    flex-wrap: wrap;
    display: flex;
`

const HeadText = styled.h2`
    margin-top: 40px;
`;

const Text = styled.p`
    font-size: 24px;
`;

const CardItem = styled(Card)`
    margin-right: 1vw;
    margin-top: 1vw;
`

export { Wrapper, HeadText, Text, StyledCard, CardItem };