import React from 'react';
import { useSelector } from 'react-redux';
import StyledPulse from "./styled/StyledPulse";
import StyledWaitingRoom from "./styled/StyledWaitingRoom";
import GlobalStyle from "../../layout/GlobalStyle";

//todo add fetching image from db
function WaitingRoomCard() {
    const image = useSelector(state => state.loginLogout.user.image);

    return (
        <>
            <GlobalStyle />
            <StyledWaitingRoom>
                <p>Niestety nie ma nikogo nowego w Twojej okolicy..</p>
                <StyledPulse>
                    <img src={image} alt='me'/>
                </StyledPulse>
            </StyledWaitingRoom>
        </>
    );
}

export default WaitingRoomCard;
