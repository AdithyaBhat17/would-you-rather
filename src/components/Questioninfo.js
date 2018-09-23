import React from 'react';
import Navtab from './Navtab';
import { connect } from 'react-redux';
import Postdata from './Postdata';
import { addAnswerAction } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class Questioninfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: this.props.answer
        }
        this.choice = this.choice.bind(this);
    }

    choice(option){
        const { dispatch, question, authUser } = this.props;
        const { answer } = this.state;
        if(!answer){
            if(option === 1){
                dispatch(addAnswerAction(authUser, question.id, 'optionOne'));
                this.setState({answer: 'optionOne'});
            }else{
                dispatch(addAnswerAction(authUser, question.id, 'optionTwo'));
                this.setState({answer: 'optionTwo'});
            }
        }
    }

    render(){
        const { question, authUser, score1, score2, totalScore } = this.props;
        const { answer } = this.state;
        if(authUser === null)
            return <Redirect to="/login"/>
        let classList = [];
        if(answer){
            if(answer === 'optionOne'){
                classList = ['selected thumbnail', 'thumbnail'];
            } else if(answer === 'optionTwo'){
                classList = ['thumbnail', 'selected thumbnail'];
            } 
        } else{
            classList = ['thumbnail', 'thumbnail'];
        }
        return(
            <div>
                <Navtab/>
                { question && (
                    <div className="container">
                        <Postdata 
                        userid={question.author}
                        timestamp={question.timestamp}/>
                        <div className="row">
                            <h4 style={{marginLeft:`5px`}}>Would you rather? <small>You must vote first to see the results :)</small></h4>
                            <div className="col-md-6 col-sm-12 questions">
                                <div onClick={() => this.choice(1)} className={classList[0]}>
                                    {question.optionOne.text}              
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 questions">
                                <div onClick={() => this.choice(2)} className={classList[1]}>
                                    {question.optionTwo.text}
                                </div>
                            </div>
                        </div>
                        {answer && (
                            <div className="container">
                                <div className="row progress">
                                    <div 
                                    className="col-xs-6" 
                                    style={score1 != 0 ? {width: `${score1}%`,backgroundColor:`#000`,color:`#fff`} : {display:`none`}}
                                    >
                                        {score1 != 0 ? `${score1}% ` : ''}
                                    </div>
                                    <div 
                                    className="col-xs-6" 
                                    style={score2 != 0 ? {width: `${score2}%`,backgroundColor:`#fff`,border:`1px solid #000`,color:`#000`} : {display:`none`}}
                                    >
                                        {score2 != 0 ? `${score2}% ` : ''}
                                    </div>
                                </div>
                                <div className="score">
                                    Total number of votes for this question = {totalScore} 
                                    <br/> <br/>
                                    <p><span className="box"></span>&nbsp;Option A</p>
                                    <p><span className="border-box"></span>&nbsp;Option B</p>
                                </div>
                            </div>                            
                        )}
                    </div>)
                }
            </div>
        )
    }
}

function mapStateToProps ({ authUser , questions, users }, { match }) {
    let question = questions[match.params.question_id]
    let answer, score1, score2, totalScore;
  
    if (authUser  !== null) {
      const answers = users[authUser].answers
  
      if (answers.hasOwnProperty(question.id)) {
        answer = answers[question.id]
      }
  
      totalScore = question.optionOne.votes.length + question.optionTwo.votes.length
      score1 = parseFloat((question.optionOne.votes.length / totalScore) * 100).toFixed(2);
      score2 = parseFloat((question.optionTwo.votes.length / totalScore) * 100).toFixed(2);
    }
  
    return {
      authUser,
      question,
      answer,
      totalScore,
      score1,
      score2
    }
  }

export default connect(mapStateToProps)(Questioninfo);