import React, { useState } from 'react';
import './PersonCard.css';
import Person from './Person';
import data from '../../data.json';

function PersonCard() {
    const [people, setPeople] = useState(data);
    console.log(people)//pomocniczy

    const removePersonFromData = (people, id) => {
        return people.filter(person => person.id !== id);
    }

    const handleButtonAction = (id, action) => {
        switch (action) {
            case 'addToLikedUsers':
                setPeople(removePersonFromData(people, id))
                break;
            case 'addToDislikedUsers':
                setPeople(removePersonFromData(people, id))
                break;
            default:
                return people;
        }
    }

    return (
        <div className='personCard'>
            {people[0] ? (
                <Person
                    key={people[0].id}
                    person={people[0]}
                    handleButtonAction={handleButtonAction}
                />
            ) : null}
        </div>
    );
}

export default PersonCard;
