import {
    _getUsers,
    _getQuestions
} from '../util/_DATA';
import { getUsers } from './users';
import { getQuestions } from './questions';
import {
    showLoading,
    hideLoading
} from 'react-redux-loading';
 
//TODO : Refactor this in a seperate API file.
export function getInitialData(){
    return Promise.all([
        _getUsers,
        _getQuestions
    ]).then(([users, questions]) => ({
        users,
        questions
    }));
}

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        });
    }
}

