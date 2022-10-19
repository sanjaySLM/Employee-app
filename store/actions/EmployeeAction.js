import { Employee } from "../../models/Employee";
import { Manager } from "../../models/Manager";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const addEmployee = (name, phnumber, manager) => {
  return (dispatch, getState) => {
    const val = JSON.stringify(Math.floor(1000 + Math.random() * 9000));
    const addedEmployee = new Employee(val, name, phnumber, manager);
    const managerData = getState().Employee.managerData;
    const found = managerData.find((element) => element.id == manager);
    found.employeeList.push(val);

    dispatch({
      type: ADD_EMPLOYEE,
      addEmployeePayLoad: { addedEmployee, found },
    });
  };
};
