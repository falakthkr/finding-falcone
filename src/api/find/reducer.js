import {
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE,
    FIND_RESPONSE_REQUEST,
    FIND_RESPONSE_SUCCESS,
    FIND_RESPONSE_FAILURE
} from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    token: '',
    response: null
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TOKEN_FAILURE:
            return {
                ...state,
                isError: true
            }
        case GET_TOKEN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                token: payload.data.token
            }
        case FIND_RESPONSE_FAILURE:
            return {
                ...state,
                isError: true
            }
        case FIND_RESPONSE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FIND_RESPONSE_SUCCESS:
            return {
                ...state,
                response: payload.data
            }
        default:
            return state
    }
}

export default reducer;