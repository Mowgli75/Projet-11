export const login = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

export const getInfo = (payload) => {
  return {
    type: "GET INFO",
    payload,
  };
};

export const logout = (payload) => {
    return {
      type: "LOGOUT",
      payload,
    };
  };

