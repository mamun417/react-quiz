import personActionTypes from "../types/personActionTypes";

const personActions = {
    updateName() {
        return { type: personActionTypes.UPDATE_NAME, payload: "New name" };
    },
};

export default personActions;

/*const personActions = {
export const updateName = () => {
    return { type: personActionTypes.UPDATE_NAME, payload: "New name" };
};
};

export default personActions;*/
