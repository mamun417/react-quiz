import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import synchoronusActions from "../../../store/actions/synchoronusActions";
import Button from "../../Button";

function LearnReduxSynchronus() {
    const dispatch = useDispatch();
    const syncStore = useSelector((state) => state.syncReducer);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        dispatch(synchoronusActions.getUsers());
    }

    return (
        <>
            <div>
                {syncStore.loading && <div>Loading...</div>}
                {!!syncStore.users.length &&
                    syncStore.users.map((user, key) => {
                        return (
                            <div key={key}>
                                <div>
                                    {user.name} - {user.name} - {user.name}
                                </div>
                            </div>
                        );
                    })}
                {syncStore.errors && <div style={{ color: "red" }}>{syncStore.errors}</div>}
                <Button onClick={getUsers}>GET DATA</Button>
            </div>
        </>
    );
}

export default LearnReduxSynchronus;
