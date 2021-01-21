import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  transition: width 2s;
  padding: 0 0 0 60px;
  //:hover {
  //width: 1200px
  //}
  
  li {
    padding: 18px 10px;
  }
  
  @media (max-width: 992px) {
     flex-flow: column nowrap;
     background-color: #0779dd;
     position: fixed;
     //transition: width 2s;
     //width: 900px;
     // transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
     top: 0;
     left: 0;
     height: 100vh;
     width: 300px;
     transition: width 2s ease;
     //padding-top: 3.5rem;
     //transition: transform 0.3s ease-in-out;
    //transition: width 600ms ease;
    opacity: 90%;
    
    //li {
    //  color: #fff;
    //  opacity: 100%;
    //}
  }
`;

export default StyledUl;
