import { authenticationTypes as types } from 'ActionTypes';

export const updateUserObject = userObject => ({ type: types.UPDATE_USER_OBJECT, userObject });
export const removeUserObject = () => ({ type: types.REMOVE_USER_OBJECT });