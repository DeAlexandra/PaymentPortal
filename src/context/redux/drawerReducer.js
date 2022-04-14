const drawerReducer = (state = { open: false }, action) => {
    switch (action.type) {
        case "OPEN": return { open: true };
        case "RESET": return { open: false };
        default: return state;
    }
};

export default drawerReducer;