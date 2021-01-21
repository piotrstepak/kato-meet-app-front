import styled from 'styled-components';

const StyledLine = styled.hr`
    background-color: ${({ theme }) => theme.colors.pinkBorder};
    border: 2px solid ${({ theme }) => theme.colors.pinkBorder};
    border-radius: 3px;
    width: 90%;
    box-sizing: border-box;
`;

export default StyledLi;
