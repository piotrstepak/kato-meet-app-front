import { combineReducers } from "redux";
import loginLogoutReducer from "./app/loginLogout/duck";

const rootReducer = combineReducers({
    loginLogout: loginLogoutReducer,
})

export default rootReducer;
