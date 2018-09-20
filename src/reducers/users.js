import { 
    GET_USERS,
    ADD_QUESTION_BY_USER,
    ADD_ANSWER_BY_USER    
} from '../actions/users';

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
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }
        case ADD_ANSWER_BY_USER: 
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}