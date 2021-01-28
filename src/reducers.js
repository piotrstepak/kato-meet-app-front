import { combineReducers } from "redux";
import userActionsReducer from "./app/userActions/duck";

const rootReducer = combineReducers({
    loginLogout: userActionsReducer,
})

export default rootReducer;
