import { getUserData } from "../../utility/database";

export const AUTHENTICATION = "AUTHENTICATION";
export const LOGOUT = "LOGOUT";

export const authAction = (userName, password) => {
  return async (dispatch) => {
    const getData = await getUserData();
    var isValid = false;

    for (const key in getData) {
      if (
        getData[key].FLDNAME === userName &&
        getData[key].FLDPASSWORD === password
      ) {
        isValid = true;
      }
    }
    if (!isValid) {
      alert("Invalid Username or Password");
    }
    dispatch({
      type: AUTHENTICATION,
      authPayLoad: { userName, password, isValid },
    });
  };
};

export const logoutHandler = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
      authPayLoad: false,
    });
  };
};
