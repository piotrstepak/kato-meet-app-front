import styled from 'styled-components';
import StyledButton from "./StyledButton";

export const StyledDropDownButton = styled(StyledButton)`
    //display: inline-block;
    //color: red;
    
    svg {
      vertical-align: middle;
    }
`;

export const StyledDropDown = styled.div`
    background-color: #0B85F1;
    //display: none;
    position: absolute;
    /*min-width: 260px;*/
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 5px;
    align-items: baseline;
    z-index: 1;
    display: flex;
    flex-direction: column;
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        padding: 0;
    }
    
    p {
        padding: 5px;
        /*text-align: center;*/
    }
    
    svg {
        vertical-align: middle;
    }
`;

export const StyledDropDownList = styled.div`
    // &:hover ${props => props.className === StyledDropDown.className && StyledDropDown} {
    //         display: flex;
    //         flex-direction: column;
    //    }
    
`;
// ${props => props.className === StyledDropDown.className ? alert("rowny"): alert('nierowny')}


// export default StyledDropDown;
