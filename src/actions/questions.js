import {
    _saveQuestion,
    _saveQuestionAnswer
} from '../util/_DATA';
import { 
    showLoading,
    hideLoading
} from 'react-redux-loading';

export const ADD_QUESTION = 'ADD_QUESTION';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}

// pass an object as parameter to get who answered the question and which question was answered along with the voted answer.
export function addAnswer({authedUser, qid, answer}){
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

function saveQuestion(question){
    return _saveQuestion(question);
}

function saveQuestionAnswer({authedUser, qid, answer}){
    return _saveQuestionAnswer({authedUser, qid, answer});
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
        .then(question => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()));
    }
}

export function handleAnswer(ans){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const answeredQuestion = {
            authedUser,
            qid: ans.id,
            answer: ans.id
        };
        dispatch(showLoading());
        dispatch(addAnswer(answeredQuestion));
        return saveQuestionAnswer(answeredQuestion)
        .then(() => dispatch(hideLoading()));
    }
}

