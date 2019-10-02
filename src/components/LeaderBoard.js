import React from 'react';
import Navtab from './Navtab';
import { connect } from 'react-redux';
import podium from '../assets/podium.svg';
import { Redirect } from 'react-router-dom';
import defaultimg from '../assets/defaultuser.svg';

function LeaderBoard(props){
    const { authUser, userinfo } = props;
    if(authUser === null)
        return <Redirect to="/login" />
    return(
        <div>
            <Navtab/>
            <div className="container">
                <h1
                 style={{textAlign:`center`,fontWeight:`bold`, display:`inline`,fontSize:`24px`}}>
                 <img className="lead-img" src={podium} alt="leaderboard"/>&nbsp;Leaderboard</h1>
                 <div className="table-responsive">
                    <table className="table" align="center">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Username</th>
                                <th>Questions asked</th>
                                <th>Questions answered</th>
                                <th>Total Score</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {userinfo.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <img 
                                        src={user.avatar !== '' ? user.avatar : defaultimg} 
                                        alt={user.name} 
                                        className={user.avatar !== '' ? 'avatar' : ''}/>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.questions}</td>
                                    <td>{user.answers}</td>
                                    <td>{user.answers + user.questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>

        </div>
    )
}

function mapStateToProps({users, authUser}){
    let userinfo = [];
    Object.keys(users).map(user => 
        userinfo.push({
            id: user,
            name: users[user].name,
            avatar: users[user].avatarURL,
            questions: users[user].questions.length,
            answers: Object.keys(users[user].answers).length
        })
    );
    userinfo.sort((a,b) => ((b.questions + b.answers) - (a.questions + a.answers)));
    return { 
        userinfo,
        authUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);

