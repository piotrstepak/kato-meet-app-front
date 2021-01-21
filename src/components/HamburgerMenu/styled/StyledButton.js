import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    /*text-shadow: 2px 2px 2px rgba(0,0,0,0.5);*/
    background: transparent;
    /*border: 2px solid black;*/
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Indie Flower', cursive;
    
    :hover {
        color: #F5A3E4;
        /*border: 4px solid #F5A3E4;*/
    }
`;

export default StyledButton;
