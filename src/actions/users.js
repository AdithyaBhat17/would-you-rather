export const GET_USERS = 'GET_USERS';
export const ADD_QUESTION_BY_USER = 'ADD_QUESTION';
export const ADD_ANSWER_BY_USER = 'ADD_ANSWER';

export function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

export function addQuestionByUser(question){
    return {
        type: ADD_QUESTION_BY_USER,
        question
    }
}

export function addAnswerByUser(authUser, qid, answer){
    return {
        type: ADD_ANSWER_BY_USER,
        authUser,
        qid,
        answer
    }
}