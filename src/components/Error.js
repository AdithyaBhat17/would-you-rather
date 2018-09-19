import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return(
        <div className="container">
            <p class="error-text">Oof! Looks like you're lost mate</p>
            <Link 
             to="/"
             className="login"
             style={{textDecoration:`none`,color:`#fff`}}>Take me back!</Link>
        </div>
    );
}

export default Error;