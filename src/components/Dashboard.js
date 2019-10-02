import React from 'react';
import Navtab from './Navtab';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Usertab from './Usertab';
import Questioncard from './Questioncard';

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
        // console.log(this.state.answeredQuestion);
    }

    render(){
        const { answeredQuestions, unansweredQuestions, user, authUser } = this.props;
        const { answeredQuestion } = this.state;
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
                            className={ !answeredQuestion ? 'active tab col-xs-6' : 'tab col-xs-6'}>
                                Unanswered
                            </div>
                            <div
                            onClick={this.toggle}
                            className={answeredQuestion ? 'active tab col-xs-6' : 'tab col-xs-6'}>
                                Answered
                            </div>
                        </div>
                    </div>
                    <div className="container cards">
                        {answeredQuestion && answeredQuestions.map(question => (
                            <Questioncard 
                            question={question} 
                            key={question.id} 
                            answer={user.answers[question.id]} 
                            />
                        ))}
                        { !answeredQuestion && unansweredQuestions.map(question => (
                            <Questioncard 
                            question={question} 
                            key={question.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

function mapStateToProps({questions, users, authUser}){
    let user;
    let answeredQuestions = [];
    let unansweredQuestions = [];
    if(authUser !== null)
        user = users[authUser];
    Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .map(no => questions[no])
    .filter(question => (
        user.answers.hasOwnProperty(question.id)) ?
            answeredQuestions.push(question) :
            unansweredQuestions.push(question)
    );
    return {
        answeredQuestions,
        unansweredQuestions,
        user,
        authUser
    }
}

export default connect(mapStateToProps)(Dashboard);