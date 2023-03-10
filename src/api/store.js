import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import planetReducer from "./planets/reducer"
import vehicleReducer from "./vehicles/reducer"

const rootReducer = combineReducers({
    planets: planetReducer,
    vehicles: vehicleReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export { store, rootReducer }