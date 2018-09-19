import React from 'react';
import { connect } from 'react-redux';
import loadingimg from '../assets/loading.gif';

class LeaderBoard extends React.Component {
    render(){
        return (
            this.props.loading === true ? <img src={loadingimg} alt="loading" className="loading"/> : (
                <div className="container">
                    <h1>LeaderBoard</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Questions asked</th>
                                <th>Questions answered</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.lead.map((user) => (
                                <tr key={user.id}>
                                    <td><img className="leaderboard-img" src={user.avatarURL} alt={user.username}/></td>
                                    <td>{user.asked}</td>
                                    <td>{user.answered}</td>
                                    <td>{user.asked + user.answered}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        );
    }
}

function mapStateToProps({users}){
    const lead = Object.keys(users).map((id) => ({
        id,
        asked: users[id].questions.length,
        answered: Object.keys(users[id].answers).length,
        username: users[id].name,
        avatarURL: users[id].avatarURL
    })).sort((a,b) => b.asked + b.answered - (a.asked - a.answered));
    return {
        lead
    }
}


export default connect(mapStateToProps)(LeaderBoard);
