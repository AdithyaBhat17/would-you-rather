import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from '../util/_DATA';
import { getUsers, addQuestionByUser, addAnswerByUser } from './users';
import { getQuestions, addQuestion, addAnswer } from './questions';
import { showLoading, hideLoading } from './loading';
 
export function getInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getUsers,
            _getQuestions
        ]).then(([users, questions]) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        });
    }    
}

export function saveQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionByUser(authedUser, question.id))
        })
        .then(() => dispatch(hideLoading()));
    }
}

export function handleSaveAnswer(qid, answer){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => {
            dispatch(addAnswer(authedUser, qid, answer));
            dispatch(addAnswerByUser(authedUser, qid, answer));
        })
        .then(() => {
            dispatch(hideLoading());
        })
    }
}

