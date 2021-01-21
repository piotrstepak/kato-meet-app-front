import styled from 'styled-components';

export const ActionButton = styled.button`
    width: 50px;
    height: 50px;
    margin-right: 30px;
    padding: 10px;
    border: 0;
    border-radius: 50px;
    outline: none;
    background-color: #F5A3E4;
    float: left;
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    
    :hover {
        background-color: #E68DE3;
        width: 55px;
        height: 55px;
    }
    
    img {
        width: 100%;
    }
`;

export const StyledActions = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`;
