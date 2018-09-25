import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({component: Component, isLoggedIn, ...rest}){
    return(
    <Route {...rest} render={(props) => {
        return (
            isLoggedIn 
            ? <Component {...props} />
            : <Redirect to={{
            pathname:'/login',  
            state: {from: props.location}
        }}/>
    )}} />
    )};

function mapStateToProps({authUser}){
    return {
        isLoggedIn: authUser !== null
    }
}

export default connect(mapStateToProps)(PrivateRoute);