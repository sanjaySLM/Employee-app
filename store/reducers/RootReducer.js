import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeReducer from "./EmployeeReducer";

export const rootReducer = combineReducers({
  Auth: AuthReducer,
  Employee: EmployeeReducer,
});
