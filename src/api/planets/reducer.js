import { GET_PLANET_DETAILS_SUCCESS, GET_PLANET_DETAILS_FAILURE, GET_PLANET_DETAILS_REQUEST, GET_VEHICLE_DETAILS_SUCCESS, GET_VEHICLE_DETAILS_REQUEST, GET_VEHICLE_DETAILS_FAILURE } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    planets: []
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PLANET_DETAILS_SUCCESS:
            return {
                ...state,
                planetsData: payload
            }
        case GET_PLANET_DETAILS_FAILURE:
            return {
                ...state,
                isError: true
            }
        case GET_PLANET_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_VEHICLE_DETAILS_SUCCESS:
            return{
                ...state,
                vehiclesData: payload
            }
        case GET_VEHICLE_DETAILS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_VEHICLE_DETAILS_FAILURE:
            return{
                ...state,
                isError: true
            }
        default:
            return state;
    }
}

export default reducer;