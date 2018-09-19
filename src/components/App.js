import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Error from './Error';
import { connect } from 'react-redux';
import { getInitialData } from '../actions/shared';
import { bindActionCreators } from 'redux';
import { logIn, logOut } from '../actions/authentication';
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false,
      selectedUser: '',
      userAvatar: '',
      login: false
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount(){
    this.setState({
      selectedUser: '',
      userAvatar: ''
    })
    this.props.getInitialData();
  }

  componentDidUpdate(prevProps, prevState) {}

  onLogin(){
    this.props.logIn(this.state.selectedUser);
  }

  onLogout(){
    this.props.logOut();
    this.props.history.push("/");
  }

  addQuestion(question){
    this.setState({
      questions: {
        ...this.state.questions,
        [question.id]: question
      }
    });
  }

  selectUser(id){
    if(id !== ""){
      this.setState({
        selectedUser: id,
        userAvatar: Object.values(this.props.users).filter(user => user.id === id).map(user => user.avatarURL)
      })
    }else{
      return 0;
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar
            logOut = {this.onLogout}
            authedUser = {this.props.authedUser}
            userAvatar = {this.state.userAvatar}/>
            <LeaderBoard
            users={this.props.users}
            loading={this.props.loading}/>
            {/* <Switch>
              {this.props.authedUser !== null && this.props.authedUser !== undefined && this.props.authedUser !== "" ? (
                <React.Fragment>
                  <Route
                  exact path="/leaderboard"
                  render={() => (
                    <LeaderBoard
                     users={this.props.users}
                     loading={this.props.loading}/>
                  )}/>
                  
                </React.Fragment>
              ) : (
                <Route 
                  exact path="/"
                  render={() => (
                    <Login 
                    loading={this.props.loading}
                    onSelect={this.selectUser}
                    selectedUser={this.state.selectedUser}
                    onLogIn={this.onLogIn}/>
                  )}/>
                )}
                <Route component={Error}/>
            </Switch> */}
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser : state.authedUser,
    users: state.users,
    questions: state.questions,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn,
    logOut,
    getInitialData
  },
  dispatch
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
