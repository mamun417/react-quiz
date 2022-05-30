import personActionTypes from "../types/personActionTypes";

const initialState = { name: "Abdullah Al Mamun" };

const personReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case personActionTypes.UPDATE_NAME:
            return { ...state, name: payload };
        default:
            return state;
    }
};

export default personReducer;
