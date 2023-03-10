import {
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE,
    FIND_RESPONSE_REQUEST,
    FIND_RESPONSE_SUCCESS,
    FIND_RESPONSE_FAILURE
} from "./actionTypes";
import axios from "axios";

export const getTokenRequest = (payload) => ({
    type: GET_TOKEN_REQUEST,
    payload
})

export const getTokenSuccess = (payload) => ({
    type: GET_TOKEN_SUCCESS,
    payload
})

export const getTokenFailure = (payload) => ({
    type: GET_TOKEN_FAILURE,
    payload
})

export const findResponseRequest = (payload) => ({
    type: FIND_RESPONSE_REQUEST,
    payload
})

export const findResponseSuccess = (payload) => ({
    type: FIND_RESPONSE_SUCCESS,
    payload
})

export const findResponseFailure = (payload) => ({
    type: FIND_RESPONSE_FAILURE,
    payload
})

export const getToken = () => dispatch => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    dispatch(getTokenRequest());
    return axios.post("https://findfalcone.herokuapp.com/token", null, config)
        .then(res => {
            if (res.status === 200) {
                return dispatch(getTokenSuccess({ token: res.data }))
            }
            else {
                return dispatch(getTokenFailure({ message: "Error" }))
            }
        })
}

export const findResponse = (data) => dispatch => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    dispatch(findResponseRequest());
    return axios.post("https://findfalcone.herokuapp.com/find", data, config)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                return dispatch(findResponseSuccess({ response: res.data }))
            }
            else {
                return dispatch(findResponseFailure({ message: "Error" }))
            }
        })
}