import styled from 'styled-components';
import Button from '../../UI/StyledButton';

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
    width: 20%;
`;

export const StyledLine = styled.hr`
    background-color: ${({ theme }) => theme.colors.pinkBorder};
    border: 2px solid ${({ theme }) => theme.colors.pinkBorder};
    border-radius: 3px;
    width: 400px;
    //box-sizing: border-box;
`;

export const StyledH2 = styled.h2`

`;
