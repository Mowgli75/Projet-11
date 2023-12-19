const initialState = {
  id: "",
  email: "",
  userName: "",
  firstName: "",
  lastName: "",
  isLogged: false,
  toker: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, isLogged: true };
    case "LOGOUT":
      return { ...initialState };
    case "GET INFO":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
