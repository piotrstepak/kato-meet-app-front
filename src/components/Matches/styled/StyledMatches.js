import styled from 'styled-components';
import Button from '../../UI/StyledButton';
import { Link } from "react-router-dom";

export const StyledUl = styled.ul`
    padding: 0;
`;

export const StyledRow = styled.li`
    list-style-type: none;
    display: flex;
    //justify-content: center;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    width: 400px;
    box-sizing: border-box;
    
    :hover {
      cursor: pointer;
    }
    
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    
    p {
        font-weight: bold;
        font-size: 20px;
    }
`;

export const StyledButton = styled(Button)`
    padding: 5px 12px;
    width: 18%;
    font-size: 13px;
`;

export const StyledLine = styled.hr`
    background-color: ${({ theme }) => theme.colors.pinkBorder};
    border: 2px solid ${({ theme }) => theme.colors.pinkBorder};
    border-radius: 3px;
    width: 400px;
    //box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pinkBorder};
    border: none;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 12px;
    width: 18%;
    text-align: center;
    border-radius: 16px;
    outline: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    font-family: 'Indie Flower', cursive;
    margin: 5px 0 5px 0;
    box-sizing: border-box;    
    text-decoration: none;
    color: black;
    
    :hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.pinkHover};
    }
`;

export const StyledH2 = styled.h2`
    padding: 20px 0 10px 0;
`;
