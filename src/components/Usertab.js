import React from 'react';
import defaultuser from '../assets/defaultuser.svg';

export default function Usertab(props){
    const {user} = props;
    const avatarURL = user.avatarURL === '' ? defaultuser : user.avatarURL;
    return (
        <div className="container">
            <div className="user-profile">
                <img className={avatarURL !== defaultuser ? 'avatar' : ''} src={avatarURL} alt={user.name}/>
                <span className="hello"> Hi, {user.name}!</span>
            </div>
        </div>
    )
}