import React, { useEffect, useState } from 'react';
import './PersonCard.css';
import Person from './Person';
import WaitingRoomCard from "./WaitingRoomCard";
import { useSelector } from 'react-redux';
import axios from "axios";

const setEmptyUser = {
    "likedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "_id": "",
    "name": "",
    "image": "",
    "age": null,
    "email": "",
    "password": "",
    "createdAt": "",
    "updatedAt": "",
}
//refresh component eg when !people

function PersonCard() {
    const [personToDisplay, setPersonToDisplay] = useState(setEmptyUser);
    const loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const nextUserToDisplayAPI = 'http://localhost:3001/nextUserToDisplay/';

    useEffect(() => {
        axios.get(nextUserToDisplayAPI)
            .then(res => {
                setPersonToDisplay(res.data)
                // console.log(personToDisplay)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);//?personToDisplay

    const fetchData = async () => {
        const response = await axios.get(nextUserToDisplayAPI);
        setPersonToDisplay(response.data)
    }

    const updateLoggedUserInDB = (action) => {
        //fetch logged likedBy arr because in the meantime someone might have liked him
        const updateUserAPI = `http://localhost:3001/users/update/${loggedUser._id}`;
        let updatedLoggedUser = {...loggedUser};
        console.log('Update: ')//helper print
        console.log(updatedLoggedUser)//helper print
        switch (action) {
            case 'like':
                updatedLoggedUser.likedUsers.push(personToDisplay._id);// ? first update in store and then clone it and send to db
                loggedUser.likedUsers.push(personToDisplay._id);
                // updateLastViewedUserInDB();
                break;
            case 'dislike':
                // updatedLoggedUser = loggedUser.dislikedUsers.push(loggedUser.id)
                updatedLoggedUser.dislikedUsers.push(personToDisplay._id);
                loggedUser.dislikedUsers.push(personToDisplay._id);
                break;
            default:
                return personToDisplay;
        }

        axios.post(updateUserAPI, updatedLoggedUser)
            .then(res => console.log(res.data))
            // .catch(err => res.status(400).json(`Error: ${err}`))
    }

    const updateLastViewedUserInDB = () => {
        const updateUserAPI = `http://localhost:3001/users/update/${personToDisplay._id}`;
        let lastViewedUser = {...personToDisplay};
        lastViewedUser.likedBy.push(loggedUser._id);
        console.log('Last: ')//helper print
        console.log(lastViewedUser)//helper print
        axios.post(updateUserAPI, lastViewedUser)
            .then(res => console.log(res.data))
        // .catch(err => res.status(400).json(`Error: ${err}`))
    }

    const handleButtonAction = (id, action) => {
        switch (action) {
            case 'ADD_TO_LIKED_USERS':
                // updateLoggedUserInDB('like');
                // updateLastViewedUserInDB();
                setPersonToDisplay(setEmptyUser);
                fetchData();//?? how to fetch from db when a new person registers ?
                break;
            case 'ADD_TO_DISLIKED_USERS':
                // updateLoggedUserInDB('dislike');
                // updateLastViewedUserInDB();
                setPersonToDisplay(setEmptyUser);
                fetchData();
                break;
            default:
                return personToDisplay;
        }
    }

    return (
        <div className='personCard'>
            {personToDisplay._id ? (
                <Person
                    key={personToDisplay._id}
                    person={personToDisplay}
                    handleButtonAction={handleButtonAction}
                />
            ) : <WaitingRoomCard />
            }
        </div>
    );
}

export default PersonCard;
