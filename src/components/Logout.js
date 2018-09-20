import React from 'react';
import { Redirect } from 'react-router-dom';
import { logOut } from '../actions/authentication';
import { connect } from 'react-redux';

class Logout extends React.Component{
    componentWillMount(){
        this.props.dispatch(logOut());
    }
    render(){
        return <Redirect to="/"/>
    }
}

export default connect()(Logout);
