import { Navigate } from "react-router-dom";
import { useAuth } from "./Authentication";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user, "kontrol");
  if (!user) {
    // user is not authenticated
    return <Navigate to="/Finding-Sport-Friend-App" />;
  }
  return children;
};

export default ProtectedRoute;