import { AUTHENTICATION, LOGOUT } from "../actions/AuthAction";
import { MANAGER_DATA, EMPLOYEE_DATA } from "../../Data";

const initialState = {
  managerData: MANAGER_DATA,
  employeeData: EMPLOYEE_DATA,
  isAuth: false,
  username: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
        isAuth: action.authPayLoad.isValid,
        username: action.authPayLoad.isValid ? action.authPayLoad.userName : null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
