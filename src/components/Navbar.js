import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button 
                    type="button" 
                    className="navbar-toggle collapsed" 
                    data-toggle="collapse" 
                    data-target="#bs-example-navbar-collapse-1" 
                    aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link
                    to="/"
                    className="navbar-brand"
                    >
                        Would you rather
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


