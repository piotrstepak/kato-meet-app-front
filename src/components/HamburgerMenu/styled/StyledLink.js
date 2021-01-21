import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Indie Flower', cursive;
    text-decoration: none;
    color: black;
    
    :hover {
        color: #F5A3E4;
    }
`;

export default StyledLink;
