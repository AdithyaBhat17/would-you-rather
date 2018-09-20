import React from 'react';
import Navbar from './Navbar';
import wouldyou from '../assets/home.svg';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-6">
                        <img className="would-img" src={wouldyou} alt="Would you rather"/>
                    </div>
                    <div className="col-md-6 col-md-pull-6">
                        <h1 className="tagline">A classic Gen Y game!</h1>
                        <p className="about">
                            Let's play a classic game of 'Would you rather?' <br/>
                            Pick between one of the two options, like the title suggests! <br/> <br/>
                            <Link to="/login" className="login" style={{textDecoration:`none`,color:`#fff`}}>Get started!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}