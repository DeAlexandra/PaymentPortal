import { ActionTypes } from "../actionTypes";

const drawerReducer = (state = { open: false }, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_DRAWER:
            return { ...state, open: true };
        case ActionTypes.RESET_DRAWER:
            return { ...state, open: false };
        default: return state;
    }
};

export default drawerReducer;