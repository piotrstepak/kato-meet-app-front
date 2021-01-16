import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Matches.css';
// import data from '../../data.json';
import authHeader from "../../services/authHeader.service";
import { useSelector } from "react-redux";
import UserRow from './UserRow.matches';


function Matches() {
    const [matches, setMatches] = useState([]);
    const loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const MATCHES_API = 'http://localhost:3001/users/matches/';
    // console.log(matches)

    useEffect(() => {
        axios.post(MATCHES_API, {
            id: loggedUser._id
        }, {
            headers: authHeader()
        })
                .then(res => {
                    setMatches(res.data)
                    console.log(matches)//helper print
                })
                .catch(err => {
                    console.log(err);
                })
        // const fetchData = async () => {
        //     const response = await axios.post(MATCHES_API, {
        //         id: loggedUser._id
        //     }, {
        //         headers: authHeader(),
        //     })
        //     setMatches(response.data)
        // }
        // fetchData().then(r => {
        //     console.log('Promise: ' + r)
        // })
        // console.log(matches)
        }, []);

    const matchesList = () => {
        return matches.map(user => {
            return <UserRow user={user} key={user.id} />
        })
    }

    return (
        <div className='matches'>
            <h2>Twoje pary</h2>
            <table>
               <tbody>
                    {matchesList()}
               </tbody>
            </table>
        </div>
    );
}

export default Matches;
