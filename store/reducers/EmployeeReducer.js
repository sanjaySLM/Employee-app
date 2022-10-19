import { ADD_EMPLOYEE } from "../actions/EmployeeAction";
import { ADD_MANAGER } from "../actions/ManagerAction";

import { MANAGER_DATA, EMPLOYEE_DATA } from "../../Data";

const initialState = {
  managerData: MANAGER_DATA,
  employeeData: EMPLOYEE_DATA,
};

export default (state = initialState, action) => {
  let copiedManagerData = [...state.managerData];

  switch (action.type) {
    case ADD_EMPLOYEE:
      const check = state.managerData.findIndex(
        (state) => state.id === action.addEmployeePayLoad.found.id
      );
      copiedManagerData[check] = action.addEmployeePayLoad.found;
      return {
        ...state,
        employeeData: state.employeeData.concat(
          action.addEmployeePayLoad.addedEmployee
        ),
        managerData: copiedManagerData,
      };
    case ADD_MANAGER:
      return {
        ...state,
        managerData: state.managerData.concat(action.addManagerPayLoad),
      };
    default:
      return state;
  }
};
