import types from "./types";

const login = user => ({
    type: types.LOGIN, user
})

const logout = () => ({
    type: types.LOGOUT
})

const update = user => ({
    type: types.UPDATE, user
})

export default {
    login,
    logout,
    update
}
