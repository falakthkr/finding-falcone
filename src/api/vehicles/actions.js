import { GET_VEHICLE_DETAILS_SUCCESS, GET_VEHICLE_DETAILS_REQUEST, GET_VEHICLE_DETAILS_FAILURE } from "./actionTypes";
import axios from "axios";

export const getVehiclesDetailsSuccess = (payload) => ({
    type: GET_VEHICLE_DETAILS_SUCCESS,
    payload
})

export const getVehiclesDetailsFailure = (payload) => ({
    type: GET_VEHICLE_DETAILS_FAILURE,
    payload
})

export const getVehiclesDetailsRequest = (payload) => ({
    type: GET_VEHICLE_DETAILS_REQUEST,
    payload
})


export const getVehiclesDetails = () => dispatch => {
    dispatch(getVehiclesDetailsRequest())
    return axios.get("https://findfalcone.geektrust.com/vehicles")
        .then(res => {
            if (res.status === 200) {
                return dispatch(getVehiclesDetailsSuccess({ vehicles: res.data }))
            }
            else {
                return dispatch(getVehiclesDetailsFailure({ message: "Error" }))
            }
        })
}