import React, { useState } from 'react';
import './PersonCard.css';
import Person from './Person';
import WaitingRoomCard from "./WaitingRoomCard";
// import data from '../../data.json';

function PersonCard({ data }) {
    // jako props user i ogladajac karty pomijam swoje id
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

    //ifa jesli id jak w storze to pominac
    return (
        <div className='personCard'>
            {people[1] ? (
                <Person
                    key={people[1].id}
                    person={people[1]}
                    handleButtonAction={handleButtonAction}
                />
            ) : <WaitingRoomCard
                    image={people[0].image}
                />}
        </div>
    );
}

export default PersonCard;
