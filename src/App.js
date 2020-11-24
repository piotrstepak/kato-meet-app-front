import React from "react";
import './App.css';
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import LoginCard from "./components/LoginCard/LoginCard";

function App() {
    //ogolnie stan calej apki i na tej podstawie zachowania poszczegolnych komponentow
    //stan logged true false dolozyc

    return (
        <div className='app'>
            <HamburgerMenu />
            <LoginCard />
            {/*AppButtons*/}
        </div>
    );
}

export default App;
