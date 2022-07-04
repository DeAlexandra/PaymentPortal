import { ActionTypes } from "../actionTypes";

export const setDrawerOpen = () => {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.OPEN_DRAWER
        });
    };
};

export const setDrawerClose = () => {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.RESET_DRAWER
        });
    };
};

