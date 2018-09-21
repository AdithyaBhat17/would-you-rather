import React from 'react';
import { connect } from 'react-redux';
import { addAnswerAction } from '../actions/shared';
import { Link } from 'react-router-dom';

class Questioncard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: this.props.answer //since props are immutable.
        }
        this.choice = this.choice.bind(this);
    }

    choice(option){
        const { dispatch, question, authUser} = this.props;
        const { answer } = this.state;
        if(!answer){
            if(option === 1){
                dispatch(addAnswerAction(authUser, question.id, 'optionOne'));
                this.setState({answer: 'optionOne'});
            }else if(option === 2){
                dispatch(addAnswerAction(authUser, question.id, 'optionTwo'));
                this.setState({answer: 'optionTwo'});
            }
        }
    }

    render(){
        const { question } = this.props;
        let classList = [];
        const { answer } = this.state;
        if(answer){
            if(answer === 'optionOne'){
                classList = ['selected thumbnail', 'thumbnail'];
            } else if(answer === 'optionTwo'){
                classList = ['thumbnail', 'selected thumbnail'];
            } 
        } else{
            classList = ['thumbnail', 'thumbnail'];
        }
        return (
            <div className="row">
                <h4>Would you rather?</h4>
                <div className="col-md-5 col-sm-12 questions">
                    <div onClick={() => this.choice(1)} className={classList[0]}>
                        {question.optionOne.text}              
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 questions">
                    <div onClick={() => this.choice(2)} className={classList[1]}>
                        {question.optionTwo.text}
                    </div>
                </div>
                <div className="col-md-2 col-sm-12 thumbnail-info">
                    <Link style={{textDecoration:`none`,color:`#fff`}} to={`/questions/${question.id}`}>See results</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authUser}){
    return {
        authUser
    }
}

export default connect(mapStateToProps)(Questioncard);