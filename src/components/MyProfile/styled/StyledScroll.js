import styled from 'styled-components';
import Layout from "../../../layout/layout";

const StyledScroll = styled.div`
    //scroll-behaviour: smooth;
    overflow-y: scroll;
    
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      //background: #f1f1f1; 
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.pinkBorder};
      border-radius: 5px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.pinkHover}; 
    }
    
    img {
       //justify-content: center;
        //align-items: center;
        padding: 15px 0 0 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`;

export default StyledScroll;
