import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import authHeader from "../../services/authHeader.service";
import Person from "../PersonCard/Person";


function PersonToDisplayMatches() {
    const [personToDisplay, setPersonToDisplay] = useState(null);
    const GET_USER_API = 'http://localhost:3001/users/';
    let { id } = useParams();

    useEffect(() => {
        axios.get(GET_USER_API + id, {
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
        <>
            {personToDisplay && personToDisplay._id ? (
                <Person
                    key={personToDisplay._id}
                    person={personToDisplay}
                />
            ) : null
            }
        </>
    );
}

export default PersonToDisplayMatches;
