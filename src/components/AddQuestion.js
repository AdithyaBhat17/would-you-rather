import React from 'react';
import Navtab from './Navtab';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import addimg from '../assets/add.svg';
import { addQuestionAction } from '../actions/shared';

class AddQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.askQuestion = this.askQuestion.bind(this);
    }

    askQuestion(e){
        e.preventDefault(); //prevent default submition behavior of form.
        const { authUser, dispatch } = this.props;
        let optionOne = e.target[0].value;
        let optionTwo = e.target[1].value;
        dispatch(addQuestionAction(authUser, optionOne, optionTwo));
        this.setState({redirect: true});
    }

    render(){
        const { authUser } = this.props;
        const { redirect } = this.state;
        if(authUser === null)
            return <Redirect to="/login"/>
        if(redirect)
            return <Redirect to="/dashboard"/>
        return(
            <div>
                <Navtab/>
                <h1 style={{textAlign:`center`, fontFamily:`Dionisio`}}>Would you Rather?</h1>
                <div className="container">
                    <form onSubmit={this.askQuestion} className="form">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 questions">
                                <div className="thumbnail">
                                    <textarea 
                                    rows="1" 
                                    className="poll-input form-control" 
                                    required
                                    type="text" 
                                    placeholder="First option..."/>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 questions">
                                <div className="thumbnail down">
                                    <textarea 
                                    rows="1" 
                                    className="poll-input form-control" 
                                    required
                                    type="text" 
                                    placeholder="Second option..."/>
                                </div>
                            </div>
                            <button className="submit">Submit Poll</button>                           
                        </div>
                    </form>
                    <img src={addimg} alt="Add poll" className="error-img"/>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authUser}){
    return {authUser};
}

export default connect(mapStateToProps)(AddQuestion);