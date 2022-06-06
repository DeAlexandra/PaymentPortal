import { ActionTypes } from "../actionTypes";
import { makeActionCreator } from "./actionCreatorFunction";

export const getUsersAction = makeActionCreator(ActionTypes.GET_USERS);
export const getUsersSuccess = makeActionCreator(ActionTypes.GET_USERS_SUCCESS, "payload");
export const getUsersFailure = makeActionCreator(ActionTypes.GET_USERS_FAILURE, "payload");

export const updateUserAction = makeActionCreator(ActionTypes.UPDATE_USER);
export const updateUserSuccess = makeActionCreator(ActionTypes.UPDATE_USER_SUCCESS);
export const updateUserFailure = makeActionCreator(ActionTypes.UPDATE_USER_FAILURE, "payload");

export const selectedUser = makeActionCreator(ActionTypes.SELECTED_USER, "payload");
export const removeSelectedUser = makeActionCreator(ActionTypes.REMOVE_SELECTED_USER, "payload");
