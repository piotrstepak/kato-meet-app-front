import styled from 'styled-components';

const StyledDescription = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 0 0 12px 12px;
    display: flex;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 22px;
    }
    
    button {
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        border-radius: 6px;
                
        :hover {
            background-color: #E68DE3;
        }
    }
`;

export default StyledDescription;
