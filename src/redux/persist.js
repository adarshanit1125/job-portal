export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify({
            auth: state.auth,
            jobs: state.jobs,
        });
        localStorage.setItem("reduxState", serializedState);
    } catch (e) {
        // ignore write errors
    }
};
