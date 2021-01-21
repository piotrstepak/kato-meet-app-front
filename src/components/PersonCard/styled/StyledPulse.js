import styled from 'styled-components';

const StyledPulse = styled.div`
    margin: 30px auto auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(204,169,44, 0.4);
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(#e66465,  #6cb4f1);
    
    :hover {
        animation: none;
    }
    
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    
    @-webkit-keyframes pulse {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
        }
        100% {
            -webkit-box-shadow: 0 0 0 35px rgba(241, 201, 202, 0);
        }
    }

    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
            box-shadow: 0 0 0 0 rgba(241, 201, 202, 0.4);
        }
        100% {
            -moz-box-shadow: 0 0 35px 35px rgba(241, 201, 202, 0);
            box-shadow: 0 0 35px 35px rgba(241, 201, 202, 0);
        }
    }
`;

export default StyledPulse;
