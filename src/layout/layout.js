import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../utils/styles/theme';
import GlobalStyle from "./GlobalStyle";

const StyledWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.pink};
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 450px;
    //margin: 5px;
    /*padding-top: 20px;*/
    //margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 12px;
    /*box-shadow: 12px 12px 10px 0 rgba(0,0,0,0.2);*/
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    top: 50px;
    margin-left: auto;
    margin-right: auto;
    //position: absolute;
  //  margin-top: 50%;
  //  -ms-transform: translateY(-50%);
  //transform: translateY(-50%);
  
  :last-child {
    //margin-bottom: 0px;
  }
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </>
    </ThemeProvider>
);

export default Layout;
