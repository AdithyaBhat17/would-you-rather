export const GET_USERS = 'GET_USERS';
export const ADD_QUESTION_BY_USER = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

export function addQuestionByUser(authedUser, qid){
    return {
        type: ADD_QUESTION_BY_USER,
        authedUser,
        qid
    }
}

export function addAnswerByUser(authedUser, qid, answer){
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}