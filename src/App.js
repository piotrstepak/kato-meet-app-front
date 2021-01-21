import React from "react";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import PersonCard from "./components/PersonCard/PersonCard";
import NotFound from "./components/NotFound/NotFaund";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/LoginCard/Login";
import Start from "./components/LoginCard/Start";
import Register from "./components/LoginCard/Register";
import Matches from "./components/Matches/Matches";
import PersonToDisplayMatches from "./components/Matches/PersonToDisplay.matches";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
    const isLogged = useSelector(state => state.loginLogout.isLogged)

    return (
        //TODO do hamburgera link do klikniecia i wyswietlenia
        <Router>
            <div className='app'>
                <HamburgerMenu isLogged={isLogged}/>
                <Switch>
                    <Route exact path='/' component={Start} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/logged' component={PersonCard} />
                    {/*<Route path='/mission' component={Mission} />*/}
                    {/*<Route path='/how-to-start' component={HowToStart} />*/}
                    {/*<Route path='/app' component={Application} />*/}
                    {/*<Route path='/contact' component={Contact} />*/}
                    <Route exact path='/matches' component={Matches} />
                    <Route path='/matches/:id' component={PersonToDisplayMatches} />
                    {/*<Route path='/messages' component={Messages} />//id z dana osoba*/}
                    {/*<Route path='/events' component={Events} />*/}
                    <Route path='/my-profile' component={MyProfile} />
                    {/*<Route path='/more' component={More} />*/}
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
    //     <div className='app'>
    //         <HamburgerMenu isLogged={isLogged}/>
    //         {isLogged ? <PersonCard data={data}/> : <LoginCard data={data}/>}
    //     </div>
    // );
}

export default App;
