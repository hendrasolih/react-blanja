import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLogin, isSetLogin] = useState(false);

  return (
    <LoginContext.Provider value={[isLogin, isSetLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
