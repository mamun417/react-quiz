const personReducer = (state = { name: "Abdullah Al Mamun" }, { type, payload }) => {
    if (type === "UPDATE_NAME") {
        return { name: payload };
    }

    return state;
};

export default personReducer;
