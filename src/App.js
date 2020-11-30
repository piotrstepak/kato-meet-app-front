import React, { useState } from "react";
import './App.css';
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import LoginCard from "./components/LoginCard/LoginCard";
import PersonCard from "./components/PersonCard/PersonCard";
import data from './data.json';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    //ogolnie stan calej apki i na tej podstawie zachowania poszczegolnych komponentow

    return (
        <div className='app'>
            <HamburgerMenu isLogged={isLogged}/>
            {isLogged ? <PersonCard data={data}/> : <LoginCard data={data}/>}
        </div>
    );
}

export default App;
