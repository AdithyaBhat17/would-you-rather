import React, { Component } from 'react';
import Login from './Login';
import Error from './Error';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Questioninfo from './Questioninfo';
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
    <div className="App">  {/*could have used Fragment instead but chose to use a div for styling purpose*/}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/questions/:question_id" component={Questioninfo}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/add" component={AddQuestion}/>
          <Route path="/leaderboard" component={LeaderBoard}/>
          <Route component={Error}/> {/* https://tylermcginnis.com/react-router-handling-404-pages/ */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(App));
