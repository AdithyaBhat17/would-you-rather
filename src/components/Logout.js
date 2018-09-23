import React from 'react';
import { Redirect } from 'react-router-dom';
import { logOut } from '../actions/authentication';
import { connect } from 'react-redux';

class Logout extends React.Component{
    // UNSAFE_componentWillMount() is the ideal usecase since componentWillMount() will not be valid from React v17.0
    //dispatch before the component renders
    componentWillMount(){
        this.props.dispatch(logOut());
    }
    render(){
        return <Redirect to="/"/>
    }
}

export default connect()(Logout);
