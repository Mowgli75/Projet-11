export const LOGIN = "user/LOGIN"
export const LOGOUT = "user/LOGOUT"
export const EDIT_USER = "user/USER_EDIT"

const initialState = {
  id: "",
  email: "",
  userName: "",
  firstName: "",
  lastName: "",
  isLogged: false,
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload, isLogged: true };
    case LOGOUT:
      return { ...initialState };
    case EDIT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
