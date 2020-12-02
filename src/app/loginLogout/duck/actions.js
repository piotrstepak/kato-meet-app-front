import types from "./types";

const login = user => ({
    type: types.LOGIN, user
})

const logout = () => ({
    type: types.LOGOUT
})

export default {
    login,
    logout
}
