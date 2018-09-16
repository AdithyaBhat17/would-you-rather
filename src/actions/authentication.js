export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

import { 
    _getUsers
} from '../util/_DATA';

import {
    showLoading,
    hideLoading
} from 'react-redux-loading';

export function logIn(id){
    return {
        type: LOG_IN,
        id
    }
}

export function logOut(){
    return {
        type : LOG_OUT
    }
}

function getAuthedUsers(){
    return _getUsers()
}

export function handleAuthUser(id){
    return (dispatch) => {
        dispatch(showLoading());
        return getAuthedUsers()
        .then((users) => {
            const authedUser = Object.keys(users).filter(user => user === id);
            if(authedUser.length === 0){
                dispatch(logIn(null));
            }else{
                dispatch(logIn(id));
            }
        })
        .then(() => dispatch(hideLoading()));
    }
}