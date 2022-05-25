const gameInitState = { name: "Football" };

const gameReducer = (state = gameInitState, { type, payload }) => {
    if (type === "UPDATE_GAME") {
        return { name: payload };
    }

    return state;
};

export default gameReducer;
