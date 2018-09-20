import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import authUser from './authentication';

export default combineReducers({
    users,
    questions,
    authUser
});