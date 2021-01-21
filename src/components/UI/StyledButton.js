import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pinkBorder};
    border: none;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 100%;
    padding: 15px 32px;
    text-align: center;
    border-radius: 16px;
    outline: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    font-family: 'Indie Flower', cursive;
    margin: 5px 0 5px 0;
    box-sizing: border-box;    
    
    :hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.pinkHover};
    }
`;

export default StyledButton;
