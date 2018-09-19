import { combineReducers } from 'redux';
import loading from './loading';
import questions from './questions';
import users from './users';
import authedUser from './authentication';

export default combineReducers({
    authedUser,
    questions,
    users,
    loading
});