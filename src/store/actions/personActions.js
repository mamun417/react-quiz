import personActionTypes from "../types/personActionTypes";

const personActions = {
    updateName: { type: personActionTypes.UPDATE_NAME, payload: "New name" },
};

export default personActions;
