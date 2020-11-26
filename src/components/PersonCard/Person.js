import React from 'react';
import likeIcon from '../../resources/like.png';
import dislikeIcon from '../../resources/dislike.png';

function Person({ person, handleButtonAction }) {
    const { id, name, age, image } = person;

    const like = (
        <button 
            onClick={() => handleButtonAction(id, 'addToLikedUsers')}>
            <img src={likeIcon} alt='like'/>
        </button>
    )

    const dislike = (
        <button
            onClick={() => handleButtonAction(id, 'addToDislikedUsers')}>
            <img src={dislikeIcon} alt='dislike'/>
        </button>
    )

    const actions = (
        <div className='person-actions'>
            {dislike}
            {like}
        </div>
    )

    return (
        <>
            <div className='person'>
                <div className='person-photo'>
                    <img src={image} alt={name} />
                </div>
                <div className='person-description'>
                    <p className='person-name-age'>{name}, {age}</p>
                </div>
            </div>
            {actions}
        </>
    );
}

export default Person;
