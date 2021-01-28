import React, { useEffect, useState } from 'react';
import axios from 'axios';
import authHeader from "../../services/authHeader.service";
import { useSelector } from "react-redux";
import UserRow from './UserRow.matches';
import Layout from "../../layout/layout";
import { StyledUl, StyledH2, StyledLine, StyledRow } from "./styled/StyledMatches";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Matches() {
    const [matches, setMatches] = useState([]);
    const loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const MATCHES_API = 'http://localhost:3001/users/matches/';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.post(MATCHES_API, {
            id: loggedUser._id
        }, {
            headers: authHeader()
        })
                .then(res => {
                    console.log('DATA: ', res.data)
                    setLoading(false)
                    setMatches(() => res.data)
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
            return <UserRow user={user} key={user._id}/>
        })
    }

    return (
        <Layout>
            <StyledH2>Twoje pary</StyledH2>
            <StyledUl>
                {loading ?
                    <LoadingSpinner /> :
                    matches.length !== 0 ?
                        matchesList() :
                        <>
                            <StyledLine />
                            <StyledRow>Wygląda na to, że nie masz jeszcze żadnych par</StyledRow>
                        </>
                }
            </StyledUl>
        </Layout>
    );
}

export default Matches;
