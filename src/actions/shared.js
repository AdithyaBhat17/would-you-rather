import {
    getInitialData,
    saveQuestionAnswer,
    saveQuestion,
    saveNewuser
} from '../util/api';
import { getUsers, addQuestionByUser, addAnswerByUser } from './users';
import { getQuestions, addQuestion, addAnswer } from './questions';
import { logIn } from './authentication';

export function handleInitialData () {
    return dispatch => {
      getInitialData().then(({users, questions}) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(logIn(null))
      })
    }
  }

export function addUserAction(username, name){
    return dispatch => {
        saveNewuser({ username, name}).then(users => {
            if(users.error){
                console.error('Username already taken');
            }else{
                dispatch(getUsers(users));
                dispatch(logIn(username));
            }
        });
    }
}

export function addQuestionAction(authUser, one, two){
    return dispatch => {
        saveQuestion({
            optionOneText: one,
            optionTwoText: two,
            author: authUser
        })
        .then(question => {
            dispatch(addQuestionByUser(question));
            dispatch(addQuestion(question));
        });
    }
}

export function addAnswerAction(authUser, qid, answer){
    const info = {
        authedUser: authUser,
        qid,
        answer
    }
    return dispatch => {
        saveQuestionAnswer(info)
        .then(() => {
            dispatch(addAnswer(authUser, qid, answer));
            dispatch(addAnswerByUser(authUser, qid, answer));
        });
    }
}

