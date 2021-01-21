import styled from 'styled-components';

const StyledInput = styled.input`
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.pink};
    border: 4px solid ${({ theme }) => theme.colors.pinkBorder};
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 15px 32px;
    outline: none;
    width: 100%;
    text-align: center;
    font-family: 'Indie Flower', cursive;
    margin: 5px 0;
    box-sizing: border-box;
    
    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    input[type=number] {
      -moz-appearance: textfield;
    }
`;

export default StyledInput;
