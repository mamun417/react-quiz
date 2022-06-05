import { applyMiddleware, combineReducers, createStore } from "redux";
import personReducer from "./reducers/personReducer";
import gameReducer from "./reducers/gameReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import synchoronusReducer from "./reducers/synchoronusReducer";

const allReducers = combineReducers({ person: personReducer, game: gameReducer, syncReducer: synchoronusReducer });
// const initialState = { person: { name: "fff" }, game: { name: "ddd" } };
const initialState = {};

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
