import gameActionTypes from "../types/gameActionTypes";

const gameInitState = { name: "Football" };

const gameReducer = (state = gameInitState, { type, payload }) => {
    switch (type) {
        case gameActionTypes.UPDATE_GAME:
            return { ...state, name: payload };
        default:
            return state;
    }
};

export default gameReducer;
