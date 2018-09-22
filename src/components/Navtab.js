import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navtab = () => (
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
                to="/dashboard"
                className="navbar-brand"
                >
                    Would you rather
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link to="/add">Add question</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/logout">LOGOUT</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navtab;

