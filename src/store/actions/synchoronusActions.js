import synchoronuaActionTypes from "../types/synchoronuaActionTypes";
import axios from "axios";

const synchoronusActions = {
    getUsers() {
        return async (dispacth) => {
            try {
                dispacth({ type: synchoronuaActionTypes.START_REQUEST, payload: "" });

                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                const users = res.data;

                setTimeout(function () {
                    dispacth({ type: synchoronuaActionTypes.SUCCESS_REQUEST, payload: users });
                }, 2000);
            } catch (err) {
                dispacth({ type: synchoronuaActionTypes.FAILED_REQUEST, payload: err.message });
            }
        };
    },
};

export default synchoronusActions;
