import styled from 'styled-components';

const StyledBurger = styled.div`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #F5A3E4;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.4s linear;
        z-index: 100;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default StyledBurger;
