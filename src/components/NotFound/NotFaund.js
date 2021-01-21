import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import StyledNotFound from "./styled/StyledNotFaund";
import GlobalStyle from "../../layout/GlobalStyle";

function NotFound({ location }) {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [])//counter

    return (
        <>
            <GlobalStyle/>
            <StyledNotFound>
                <p>Not match for <code>{location.pathname}</code></p>
                <p>Redirect to homepage in {counter} seconds..</p>
                {counter === 0 && <Redirect to='/' />}
            </StyledNotFound>
        </>
    );
}

export default NotFound;
