import { EDIT_USER, LOGIN, LOGOUT } from "../reducers/user.reducer";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};

export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};
