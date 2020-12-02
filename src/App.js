import React from "react";
import './App.css';
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import LoginCard from "./components/LoginCard/LoginCard";
import PersonCard from "./components/PersonCard/PersonCard";
import data from './data.json';
import { connect } from 'react-redux';

//props w App??
//pobieranie danych
function App({ isLogged }) {
    return (
        <div className='app'>
            <HamburgerMenu isLogged={isLogged}/>
            {isLogged ? <PersonCard data={data}/> : <LoginCard data={data}/>}
        </div>
    );
}

const mapStateToProps = state => ({
    isLogged: state.loginLogout.isLogged
})

export default connect(mapStateToProps, {})(App)
