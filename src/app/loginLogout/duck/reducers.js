import types from "./types";

const INITIAL_LOGIN = {
    user: '', //null/undefined/{} ?
    isLogged: false,
}

const loginLogoutReducer = (state = INITIAL_LOGIN, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                user: action.user, isLogged: true
            }
        case types.LOGOUT:
            return {
                user: '', isLogged: false
            }
        default:
            return state
    }
}

export default loginLogoutReducer;
