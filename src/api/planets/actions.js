import { GET_PLANET_DETAILS_SUCCESS, GET_PLANET_DETAILS_FAILURE, GET_PLANET_DETAILS_REQUEST } from "./actionTypes";
import axios from "axios";

export const getPlanetsDetailsSuccess = (payload) => ({
    type: GET_PLANET_DETAILS_SUCCESS,
    payload
})

export const getPlanetsDetailsFailure = (payload) => ({
    type: GET_PLANET_DETAILS_FAILURE,
    payload
})

export const getPlanetsDetailsRequest = (payload) => ({
    type: GET_PLANET_DETAILS_REQUEST,
    payload
})

export const getPlanetsDetails = () => dispatch => {
    dispatch(getPlanetsDetailsRequest())
    return axios.get("https://findfalcone.geektrust.com/planets")
        .then(res => {
            if (res.status === 200) {
                return dispatch(getPlanetsDetailsSuccess({ planets: res.data }))
            }
            else {
                return dispatch(getPlanetsDetailsFailure({ message: "Error" }))
            }
        })
}