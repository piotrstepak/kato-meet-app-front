import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './NotFaund.css';

function NotFound({ location }) {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [])//counter

    return (
        <div className='notFound'>
            <p>Not match for <code>{location.pathname}</code></p>
            <p>Redirect to homepage in {counter} seconds..</p>
            {counter === 0 && <Redirect to='/' />}
        </div>
    );
}

export default NotFound;
