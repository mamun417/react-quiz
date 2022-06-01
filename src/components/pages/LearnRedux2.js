import personActions from "../../store/actions/personActions";
import gameActions from "../../store/actions/gameActions";
import { useDispatch, useSelector } from "react-redux";

function LearnRedux2() {
    const dispatch = useDispatch();
    const personName = useSelector((state) => state.person.name);
    const gameName = useSelector((state) => state.game.name);

    // as I need
    const store = useSelector((state) => state);

    return (
        <div style={{ backgroundColor: "rgb(186 227 192)", padding: "20px", borderRadius: "20px" }}>
            <h2>useSelector() and useDispatch()</h2>
            <div>Check Redux</div>{" "}
            <button onClick={() => dispatch(personActions.updateName())}>update person name</button>
            <div>Person name: {personName}</div>
            {/* as I need*/}
            <div>Person name: {store.person.name}</div>
            <br />
            <br />
            <div>Check Redux</div> <button onClick={() => dispatch(gameActions.updateGame())}>update game name</button>
            <div>Game name: {gameName}</div>
        </div>
    );
}

export default LearnRedux2;
