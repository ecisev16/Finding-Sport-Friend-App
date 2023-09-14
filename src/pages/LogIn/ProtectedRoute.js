import { Navigate } from "react-router-dom";
import { useAuth } from "./Authentication";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user, "kkooonnntttrrroooolllll");
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;