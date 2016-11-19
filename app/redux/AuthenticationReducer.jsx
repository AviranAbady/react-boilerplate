import {authenticationTypes as types} from 'ActionTypes';

let authenticationReducer = (state = {}, action) => {
    switch(action.type) {
        case types.UPDATE_USER_OBJECT:
            return {
                user: action.userObject
            };

        case types.REMOVE_USER_OBJECT:
            return {};

        default:
             return state;
    }
}

export default authenticationReducer;