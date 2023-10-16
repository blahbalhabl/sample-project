import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(sessionStorage.getItem('auth') || null);

  const contextData = {
    setAuth:setAuth,
    auth: auth,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;