import { combineReducers } from 'redux';
import loading from './loading';
import questions from './questions';
import users from './users';
import authUser from './authentication';

export default combineReducers({
    authUser,
    questions,
    users,
    loading
});