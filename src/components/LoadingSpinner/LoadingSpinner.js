import React from 'react';
import StyledLoadingSpinner, { WrapperDiv } from './styled/StyledLoadingSpinner';

const LoadingSpinner = () => (
    <>
        <WrapperDiv>
        <StyledLoadingSpinner>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoadingSpinner>
        <p>Ładowanie..</p>
        </WrapperDiv>
    </>
)

export default LoadingSpinner;
