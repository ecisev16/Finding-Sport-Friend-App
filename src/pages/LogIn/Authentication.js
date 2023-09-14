import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./LocalStorage";
const AuthContext = createContext();

export const AuthProvider = (props) => { 
//<AuthProvider>
    //<Header />
    //<MainContent />
    //<Footer />
//</AuthProvider>   => { children }
  const [user, setUser] = useLocalStorage("user", null);
  //const navigate = useNavigate();

 
  const login = async (data) => {
    setUser(data.email);
    console.log(user, 'user')
    //navigate("/root");
  };


  const logout = () => {
    setUser(null);
    //navigate("/", { replace: true });
  };

  {/* 
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
*/}
  return <AuthContext.Provider 
  value={{
    login: login,
    logout: logout,
    user: user,
  }}
  >
    {props.children}
  </AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};