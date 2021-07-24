import {
    actionTypes
} from '../../utilities/constants';

const INITIAL_STATE = {
    loginUserData: { name: 'neerak'},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.STORE_LOGIN_USER_DATA:
            console.log('data in reducerr====', action.payload)
        return { ...state, loginUserData: action.payload } 
        default:
            return state;
    }
} 