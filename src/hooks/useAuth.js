import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const setAuthenticatedData = (data) => {
    setAuth(data);
  };

  return { auth, setAuth: setAuthenticatedData };
};

export default useAuth;
