import personActions from "../../../store/actions/personActions";
import gameActions from "../../../store/actions/gameActions";
import { connect } from "react-redux";
import LearnRedux2 from "./LearnRedux2";

function LearnRedux({ store, updateName, updateGame }) {
    // function updatePersonName() {
    //     store.dispatch(updateName);
    // }

    // function updateGameName() {
    //     store.dispatch(gameAction.updateName);
    // }

    return (
        <>
            <div>
                <div>Check Redux</div> <button onClick={() => updateName()}>update person name</button>
                <div>Person name: {store.person.name}</div>
                <br />
                <br />
                <div>Check Redux</div> <button onClick={() => updateGame()}>update game name</button>
                <div>Game name: {store.game.name}</div>
            </div>
            <LearnRedux2 />
        </>
    );
}

const mapStateToProps = (state) => ({
    store: state,
});

const mapStateToDispatch = {
    updateName: personActions.updateName,
    updateGame: gameActions.updateGame,
};

// note
// TODO: no need to use dispatch when action is a function
// const mapStateToDispatch = (dispatch) => ({
//     updateName: dispatch(personActions.updateName),
//     updateGame: dispatch(gameActions.updateGame),
// });

export default connect(mapStateToProps, mapStateToDispatch)(LearnRedux);
