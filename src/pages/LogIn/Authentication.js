import { createContext, useContext, useMemo } from "react";
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
    setUser(data);
    console.log(data, 'user')
    console.log(data, 'user')
    //navigate("/root");
  };


  const logout = () => {
    const data = null;
    setUser(data);

    console.log(user, "konnttroll LOGOUT")
    console.log(user, "konnttroll LOGOUT")
    //navigate("/", { replace: true });
  };

  
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider 
  value={value}
  >
    {props.children}
  </AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};