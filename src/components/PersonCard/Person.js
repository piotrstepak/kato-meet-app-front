import React from 'react';
import Actions from "./buttons/Actions";

function Person({ person, handleButtonAction }) {
    const { id, name, age, image } = person;

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
            <Actions
                handleButtonAction={handleButtonAction}
                id={id}
            />
        </>
    );
}

export default Person;
