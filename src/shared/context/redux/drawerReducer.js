const drawerReducer = (state = { open: false }, action) => {
    switch (action.type) {
        case "OPEN": return { ...state, open: true };
        case "RESET": return { ...state, open: false };
        default: return state;
    }
};

export default drawerReducer;