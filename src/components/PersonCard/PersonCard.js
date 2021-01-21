import React, { useEffect, useState } from 'react';
import Person from './Person';
import WaitingRoomCard from "./WaitingRoomCard";
import { useSelector } from 'react-redux';
import axios from "axios";
import authHeader from "../../services/authHeader.service";
import Actions from "./buttons/Actions";

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
    const NEXT_USER_TO_DISPLAY_API = 'http://localhost:3001/users/nextUserToDisplay/';
    console.log(`ID: ${loggedUser._id}`)//helper print

    useEffect(() => {
        // const fetchPersonToDisplay = async () => {
        //     let userToDisplay;
        //     return userToDisplay = await axios.post(NEXT_USER_TO_DISPLAY_API, {
        //         _id: loggedUser._id,
        //     }, {
        //         headers: authHeader(),
        //     });
        //     // setPersonToDisplay(userToDisplay);
        // };
        // fetchPersonToDisplay().then(r => setPersonToDisplay(r.data));//???
        axios.post(NEXT_USER_TO_DISPLAY_API, {
            id: loggedUser._id
        }, {
            headers: authHeader()
        })
            .then(res => {
                setPersonToDisplay(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);//?personToDisplay

    const fetchData = async () => {
        const res = await axios.post(NEXT_USER_TO_DISPLAY_API, {
            id: loggedUser._id
        }, {
            headers: authHeader()
        })
        // const response = await axios.get(NEXT_USER_TO_DISPLAY_API, {
        //     headers: authHeader(),
        //     data: loggedUser._id
        // });
        setPersonToDisplay(res.data);
    }

    const updateLoggedUserInDB = action => {
        //fetch logged likedBy arr because in the meantime someone might have liked him
        const UPDATE_USER_API = `http://localhost:3001/users/update/${loggedUser._id}`;
        let updatedLoggedUser = {...loggedUser};
        console.log('Update: ')//helper print
        console.log(updatedLoggedUser)//helper print
        switch (action) {
            case 'like':
                updatedLoggedUser.likedUsers.push(personToDisplay._id);// ? first update in store and then clone it and send to db
                // loggedUser.likedUsers.push(personToDisplay._id);
                // updateLastViewedUserInDB();
                break;
            case 'dislike':
                // updatedLoggedUser = loggedUser.dislikedUsers.push(loggedUser.id)
                updatedLoggedUser.dislikedUsers.push(personToDisplay._id);
                // loggedUser.dislikedUsers.push(personToDisplay._id);
                break;
            default:
                return personToDisplay;
        }

        axios.put(UPDATE_USER_API, updatedLoggedUser)
            .then(res => console.log(res.data))
            // .catch(err => res.status(400).json(`Error: ${err}`))
    }

    const updateLastViewedUserInDB = () => {
        const UPDATE_USER_API = `http://localhost:3001/users/update/${personToDisplay._id}`;
        let lastViewedUser = {...personToDisplay};
        lastViewedUser.likedBy.push(loggedUser._id);
        console.log('Last: ')//helper print
        console.log(lastViewedUser)//helper print
        axios.put(UPDATE_USER_API, lastViewedUser)
            .then(res => console.log(res.data))
        // .catch(err => res.status(400).json(`Error: ${err}`))
    }

    const handleButtonAction = async (id, action) => {
        switch (action) {
            case 'ADD_TO_LIKED_USERS':
                await updateLoggedUserInDB('like');
                await updateLastViewedUserInDB();
                setPersonToDisplay(setEmptyUser);
                await fetchData();//?? how to fetch from db when a new person registers ?
                break;
            case 'ADD_TO_DISLIKED_USERS':
                await updateLoggedUserInDB('dislike');
                await updateLastViewedUserInDB();
                setPersonToDisplay(setEmptyUser);
                await fetchData();
                break;
            default:
                return personToDisplay;
        }
    }

    return (
        <>
            {personToDisplay && personToDisplay._id ? (
                <>
                <Person
                    key={personToDisplay._id}
                    person={personToDisplay}
                    handleButtonAction={handleButtonAction}
                />
                <Actions
                    handleButtonAction={handleButtonAction}
                    id={personToDisplay._id}
                />
                </>
            ) : <WaitingRoomCard />
            }
        </>
    );
}

export default PersonCard;
