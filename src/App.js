import React from "react";
import './App.css';
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import LoginCard from "./components/LoginCard/LoginCard";
import PersonCard from "./components/PersonCard/PersonCard";
import data from './data.json';
import { useSelector } from 'react-redux';

//pobieranie danych-data
function App() {
    const isLogged = useSelector(state => state.loginLogout.isLogged)

    return (
        <div className='app'>
            <HamburgerMenu isLogged={isLogged}/>
            {isLogged ? <PersonCard data={data}/> : <LoginCard data={data}/>}
        </div>
    );
}

export default App;
