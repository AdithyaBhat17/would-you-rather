import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../assets/error.svg';

export default function Error(){
    return(
        <div className="container" style={{textAlign:`center`}}>
            <img className="error-img" src={errorimg} alt="error 404"/>
            <p class="error-text">Oof! Looks like you're lost mate.</p>
            <Link 
             to="/login"
             className="login"
             style={{textDecoration:`none`,color:`#fff`}}>Take me back!</Link>
        </div>
    );
}