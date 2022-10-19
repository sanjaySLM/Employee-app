import { Employee } from "./models/Employee";
import { Manager } from "./models/Manager";

export const MANAGER_DATA = [
  new Manager(101, "lokesh", [1, 2]),
  new Manager(102, "sathesh", [3, 4]),
];

export const EMPLOYEE_DATA = [
  new Employee(1, "sanjay", "12345", 101),
  new Employee(2, "santhosh", "12345", 101),
  new Employee(3, "kumar", "12345", 102),
  new Employee(4, "bala", "12345", 102),
];
