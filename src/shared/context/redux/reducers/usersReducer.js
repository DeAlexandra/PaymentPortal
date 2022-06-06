import { ActionTypes } from "../actionTypes";

const initialState = {
    loading: false,
    users: [],
    error: null
};
const initialUpdateValues = {
    loading: false,
    user: {},
    error: null
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USERS:
            return { ...state, loading: true };
        case ActionTypes.GET_USERS_SUCCESS:
            return { ...state, users: payload, loading: false, error: null };
        case ActionTypes.GET_USERS_FAILURE:
            return { ...state, loading: false, users: [], error: payload };
        default: return state;
    };
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
};

export const updateUserReducer = (state = initialUpdateValues, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPDATE_USER:
            return {
                ...state, loading: true
            };
        case ActionTypes.UPDATE_USER_SUCCESS:
            return { ...state, user: payload, loading: false };
        case ActionTypes.UPDATE_USER_FAILURE:
            return { ...state, error: payload, loading: false };
        default:
            return state;
    }
};