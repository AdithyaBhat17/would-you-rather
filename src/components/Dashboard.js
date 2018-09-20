import React from 'react';
import Navtab from './Navtab';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Usertab from './Usertab';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answeredQuestion: false
        }
    }

    toggle = () => {
        this.setState(prev => ({
            answeredQuestion : !prev.answeredQuestion
        }));
        console.log(this.state.answeredQuestion);
    }

    render(){
        const { answeredQuestions, unansweredQuestions, user, authUser } = this.props;
        if(authUser === null)
            return <Redirect to="/login"/>
        return (
            <div>
                <Navtab/>
                <Usertab user={user}/>
                <div className="container">
                    <div className="tabs">
                        <div className="row">
                            <div
                            onClick={this.toggle}
                            className="col-xs-6 tab">
                                Answered
                            </div>
                            <div
                            onClick={this.toggle}
                            className="col-xs-6 tab">
                                Unanswered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authUser}){
    let user;
    let answeredQuestions = [];
    let unansweredQuestions = [];
    if(authUser !== null)
        user = users[authUser];
    Object.keys(questions)
    .filter(question => {
        if(user.answers.hasOwnProperty(question.id))
            answeredQuestions.push(question);
        else{ 
            unansweredQuestions.push(question);
        }
    }).map(no => questions[no]);
    return {
        answeredQuestions,
        unansweredQuestions,
        user,
        authUser
    }
}

export default connect(mapStateToProps)(Dashboard);