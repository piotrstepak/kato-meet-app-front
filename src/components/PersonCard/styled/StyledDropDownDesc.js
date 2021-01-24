import styled from 'styled-components';

//todo responsive/fitted to layout dropup
//change position to hide under rightbar ?
const StyledDropDownDesc = styled.div`
    position: absolute;
    background-color: #F5A3E4;
    //width: 100%;
    font-size: 10px;
    padding: 20px;
    box-sizing: content-box;
    bottom: 150px;
    max-width: 350px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;

export default StyledDropDownDesc;
