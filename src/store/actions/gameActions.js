import gameActionTypes from "../types/gameActionTypes";

const gameActions = {
    updateGame() {
        return { type: gameActionTypes.UPDATE_GAME, payload: "Cricket" };
    },
};

export default gameActions;

// export const updateGame = () => {
//     return { type: gameActionTypes.UPDATE_GAME, payload: "Cricket" };
// };
//
// export default gameActions;
