import { combineReducers, createStore } from "redux";
import personReducer from "./reducers/personReducer";
import gameReducer from "./reducers/gameReducer";

const allReducers = combineReducers({ person: personReducer, game: gameReducer });
// const initialState = { person: { name: "fff" }, game: { name: "ddd" } };
const initialState = {};

const store = createStore(
    allReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
