import React from 'react';

function WaitingRoomCard({ image }) {
    //image ze storea
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
