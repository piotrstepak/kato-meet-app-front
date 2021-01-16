import React, { useEffect, useState } from 'react';
import axios from "axios";
import authHeader from "../../services/authHeader.service";
import Person from "../PersonCard/Person";

function PersonMatches({ _id }) {
    const [personToDisplay, setPersonToDisplay] = useState(null);
    const GET_USER_API = 'http://localhost:3001/users/';

    useEffect(() => {
        axios.get(GET_USER_API + _id, {
            headers: authHeader()
        })
            .then(res => {
                setPersonToDisplay(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='personCard'>
            {personToDisplay && personToDisplay._id ? (
                <Person
                    key={personToDisplay._id}
                    person={personToDisplay}
                />
            ) : null
            }
        </div>
    );
}

export default PersonMatches;
