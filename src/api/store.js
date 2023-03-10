import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import planetReducer from "./planets/reducer"
import vehicleReducer from "./vehicles/reducer"
import findReducer from "./find/reducer"

const rootReducer = combineReducers({
    planets: planetReducer,
    vehicles: vehicleReducer,
    find: findReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export { store, rootReducer }