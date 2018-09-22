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
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Questions asked</th>
                            <th>Questions answered</th>
                            <th>Total Score</th>
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
                                    <td>{user.askedQuestions}</td>
                                    <td>{user.questionsAnswered}</td>
                                    <td>{user.questionsAnswered + user.askedQuestions}</td>
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
    Object.keys(users).map(user => {
        userinfo.push({
            id: user,
            name: users[user].name,
            avatar: users[user].avatarURL,
            askedQuestions: users[user].questions.length,
            questionsAnswered: Object.keys(users[user].answers).length
        });
    });
    userinfo.sort((a,b) => ((b.askedQuestions + b.questionsAnswered) - (a.askedQuestions + a.questionsAnswered)));
    return { 
        userinfo,
        authUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);

