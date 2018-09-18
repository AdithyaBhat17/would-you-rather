import React from 'react';
import '../styles/Navbar.css';
// import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
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
                    <a
                    className="navbar-brand"
                    >
                        Would you rather
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a>Home</a></li>
                        <li><a>Leaderboard</a></li>
                        <li><a>Add Question</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a>Username</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

