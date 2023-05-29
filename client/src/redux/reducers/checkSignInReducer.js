import { ERROR_CHECK_TOKEN, RESPONSE_CHECK_TOKEN, } from "../type";
const initalState = {
    payload: false,
    error: null,
};

const checkSignInReducer = (state = initalState, action) => {
    switch (action.type) {
        case RESPONSE_CHECK_TOKEN:
            return{
                ...state,
                payload: action.payload
            }
        case ERROR_CHECK_TOKEN: 
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}

export default checkSignInReducer