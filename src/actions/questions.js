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