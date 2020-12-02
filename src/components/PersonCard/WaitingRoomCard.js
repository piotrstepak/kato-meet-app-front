import React from 'react';
import { useSelector } from 'react-redux';

function WaitingRoomCard() {
    const image = useSelector(state => state.loginLogout.user.image);

    return (
        <div className='waitingRoom'>
            <p>Niestety nie ma nikogo nowego w Twojej okolicy..</p>
            <div className='pulse'>
                <img src={image} alt='me'/>
            </div>
        </div>
    );
}

export default WaitingRoomCard;
