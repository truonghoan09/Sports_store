import { SET_THEME } from "../type";

const initialState = {
    theme: 'light'
}

const setThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}

export default setThemeReducer;