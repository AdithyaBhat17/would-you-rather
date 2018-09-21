import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import defaultuser from '../assets/defaultuser.svg';

function Postdata(props){
    const { user, timestamp } = props;
    const avatarURL = user.avatarURL === '' ? defaultuser : user.avatarURL;
    return(
        <div className="container">
            <div className="user-profile">
                <img className={avatarURL !== defaultuser ? 'avatar' : ''} src={avatarURL} alt={user.name}/>
                <span>
                    <span className="hello"> <small>Asked by</small> <strong>{user.name}</strong></span> <br/>
                    <small>{moment(timestamp).fromNow()}</small> 
                </span>                
            </div>
        </div>
    );
}


//passing props as second parameter
function mapStateToProps({users}, {userid}){
    return {
        user: users[userid]
    }
}

export default connect(mapStateToProps)(Postdata);