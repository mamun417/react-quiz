import store from "../../store";
import updatePersonAction from "../../store/actions/personActions";
import updateGameAction from "../../store/actions/gameActions";

function LearnRedux() {
    function updatePersonName() {
        store.dispatch(updatePersonAction.updateName);
    }

    function updateGameName() {
        store.dispatch(updateGameAction.updateName);
    }

    return (
        <div>
            <div>Check Redux</div> <button onClick={updatePersonName}>update person name</button>
            <div>Person name: {store.getState().person.name}</div>
            <br />
            <br />
            <div>Check Redux</div> <button onClick={updateGameName}>update game name</button>
            <div>Game name: {store.getState().game.name}</div>
        </div>
    );
}

export default LearnRedux;
