import { Manager } from "../../models/Manager";
export const ADD_MANAGER = "ADD_MANAGER";
import { insertLogin } from "../../utility/database";

export const addManager = (name) => {
  return async (dispatch) => {
    const val = Math.floor(1000 + Math.random() * 9000);
    const addedManager = new Manager(name, name, []);
    const insertManagerLogin = await insertLogin(val, name, "manager" + name);

    dispatch({
      type: ADD_MANAGER,
      addManagerPayLoad: addedManager,
    });
  };
};
