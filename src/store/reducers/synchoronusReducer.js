import synchoronuaActionTypes from "../types/synchoronuaActionTypes";

const syncInitState = {
    loading: false,
    users: [],
    errors: "",
};

const synchoronusReducer = (state = syncInitState, { type, payload }) => {
    switch (type) {
        case synchoronuaActionTypes.START_REQUEST:
            return { ...state, loading: true, errors: "", users: [] };
        case synchoronuaActionTypes.SUCCESS_REQUEST:
            return { ...state, loading: false, users: payload };
        case synchoronuaActionTypes.FAILED_REQUEST:
            return { ...state, loading: false, errors: payload, users: [] };
        default:
            return state;
    }
};

export default synchoronusReducer;
