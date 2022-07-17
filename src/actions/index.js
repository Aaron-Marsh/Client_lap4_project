//LoggedIn

export const login = () => {
  return {
    type: "change",
  };
};

export const logout = () => {
  return {
    type: "change",
  };
};

//Login Footer

export const close = () => {
  return {
    type: "close",
  };
};


export const setServer = (server_url) => {
  return {
    type: "UPDATE",
    payload: server_url
  };
};


