import { GET_USERS, ADD_QUESTION_BY_USER } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions'; // users object has a property answers which is a list of all the questions answered by the user.

export default function users(state = {}, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_BY_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.qid])
                }
            }
        case ANSWER_QUESTION: 
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}