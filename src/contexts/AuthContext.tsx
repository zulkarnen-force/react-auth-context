import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: { children?: ReactNode }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLogin, setisLogin] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLogin,
    setisLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
